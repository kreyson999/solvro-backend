import type { HttpContext } from '@adonisjs/core/http'
import Cocktail from '#models/cocktail'
import CocktailTransformer from '#transformers/cocktail_transformer'
import { createCocktailValidator, listCocktailsValidator, updateCocktailValidator } from '#validators/cocktail'
import db from '@adonisjs/lucid/services/db'
import CocktailPolicy from '#policies/cocktail_policy'

export default class CocktailsController {
  /**
   * Display a list of resource
   */
  async index({ serialize, request }: HttpContext) {
    const { page = 1, perPage = 20, search, category, userId, alcoholic, ingredientIds, sort = 'name', order = 'asc' } = await request.validateUsing(listCocktailsValidator)
    const cocktails = await Cocktail.query()
      .if(search, (q) => q.whereILike('name', `%${search}%`))
      .if(category, (q) => q.where('category', category!))
      .if(userId, (q) => q.where('userId', userId!))
      .if(alcoholic === true, (q) => 
        q.whereDoesntHave('ingredients', (iq) => {
          iq.where('isAlcoholic', true)
        }
      ))
      .if(ingredientIds, (q) => {
        for (const id of ingredientIds!) {
          q.whereHas('ingredients', (iq) => iq.where('ingredients.id', id))
        }
      })
      .orderBy(sort, order)
      .orderBy('id', 'asc')
      .preload('ingredients')
      .paginate(page, perPage)

    cocktails.baseUrl(request.url()).queryString(request.qs())

    return serialize(CocktailTransformer.paginate(cocktails.all(), cocktails.getMeta()))
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, serialize, response, bouncer, auth }: HttpContext) {
    await bouncer.with(CocktailPolicy).authorize('create')
    const { ingredients, ...data} = await request.validateUsing(createCocktailValidator)

    const cocktail = await db.transaction(async (trx) => {
      const cocktail = await Cocktail.create({ ...data, userId: auth.getUserOrFail().id }, { client: trx })

      await cocktail.related('ingredients')
        .attach(Object.fromEntries(
          ingredients.map((ingredient) => [ingredient.id, { measure: ingredient.measure }]))
        )
      return cocktail
    })

    await cocktail.load('ingredients')

    response.status(201)
    return serialize(CocktailTransformer.transform(cocktail))
  }

  /**
   * Show individual record
   */
  async show({ params, serialize }: HttpContext) {
    const cocktail = await Cocktail.findOrFail(params.id)
    await cocktail.load('ingredients')
    return serialize(CocktailTransformer.transform(cocktail))
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, serialize, bouncer }: HttpContext) {
    const cocktail = await Cocktail.findOrFail(params.id)
    await bouncer.with(CocktailPolicy).authorize('update', cocktail)
    const { ingredients, ...data } = await request.validateUsing(updateCocktailValidator)

    await db.transaction(async (trx) => {
      await cocktail.useTransaction(trx).merge(data).save()

      if (ingredients) {
        await cocktail.related('ingredients')
          .sync(Object.fromEntries(
            ingredients.map((ingredient) => [ingredient.id, { measure: ingredient.measure }]))
          )
      }
    })

    await cocktail.load('ingredients')

    return serialize(CocktailTransformer.transform(cocktail))
  }

  /**
   * Delete record
   */
  async destroy({ params, serialize, bouncer }: HttpContext) {
    const cocktail = await Cocktail.findOrFail(params.id)
    await bouncer.with(CocktailPolicy).authorize('delete', cocktail)
    await cocktail.load('ingredients')
    await cocktail.delete()

    return serialize(CocktailTransformer.transform(cocktail))
  }
}