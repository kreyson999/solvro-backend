import type { HttpContext } from '@adonisjs/core/http'
import Cocktail from '#models/cocktail'
import CocktailTransformer from '#transformers/cocktail_transformer'
import { createCocktailValidator, updateCocktailValidator } from '#validators/cocktail'
import { paginationValidator } from '#validators/pagination'
import db from '@adonisjs/lucid/services/db'

export default class CocktailsController {
  /**
   * Display a list of resource
   */
  async index({ serialize, request }: HttpContext) {
    const { page = 1, perPage = 20 } = await request.validateUsing(paginationValidator)
    const cocktails = await Cocktail.query()
      .orderBy('name', 'asc')
      .orderBy('id', 'asc')
      .preload('ingredients')
      .paginate(page, perPage)

    cocktails.baseUrl(request.url()).queryString(request.qs())

    return serialize(CocktailTransformer.paginate(cocktails.all(), cocktails.getMeta()))
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, serialize, response }: HttpContext) {
    const { ingredients, ...data} = await request.validateUsing(createCocktailValidator)

    const cocktail = await db.transaction(async (trx) => {
      const cocktail = await Cocktail.create(data, { client: trx })

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
  async update({ params, request, serialize }: HttpContext) {
    const cocktail = await Cocktail.findOrFail(params.id)
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
  async destroy({ params, serialize }: HttpContext) {
    const cocktail = await Cocktail.findOrFail(params.id)
    await cocktail.load('ingredients')
    await cocktail.delete()

    return serialize(CocktailTransformer.transform(cocktail))
  }
}