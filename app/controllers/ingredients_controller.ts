import type { HttpContext } from '@adonisjs/core/http'
import Ingredient from '#models/ingredient'
import IngredientTransformer from '#transformers/ingredient_transformer'
import { createIngredientValidator, updateIngredientValidator } from '#validators/ingredient'
import { paginationValidator } from '#validators/pagination'
import IngredientPolicy from '#policies/ingredient_policy'

export default class IngredientsController {
  /**
   * Display a list of resource
   */
  async index({ serialize, request }: HttpContext) {
    const { page = 1, perPage = 20 } = await request.validateUsing(paginationValidator)
    const ingredients = await Ingredient.query()
      .orderBy('name', 'asc')
      .orderBy('id', 'asc')
      .paginate(page, perPage)

    ingredients.baseUrl(request.url()).queryString(request.qs())

    return serialize(IngredientTransformer.paginate(ingredients.all(), ingredients.getMeta()))
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, serialize, response, bouncer, auth }: HttpContext) {
    await bouncer.with(IngredientPolicy).authorize('create')
    const data = await request.validateUsing(createIngredientValidator)
    const ingredient = await Ingredient.create({ ...data, userId: auth.getUserOrFail().id })

    response.status(201)
    return serialize(IngredientTransformer.transform(ingredient))
  }


  /**
   * Show individual record
   */
  async show({ params, serialize }: HttpContext) {
    const ingredient = await Ingredient.findOrFail(params.id)

    return serialize(IngredientTransformer.transform(ingredient))
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, serialize, bouncer }: HttpContext) {
    const ingredient = await Ingredient.findOrFail(params.id)
    await bouncer.with(IngredientPolicy).authorize('update', ingredient)
    const data = await request.validateUsing(updateIngredientValidator)

    ingredient.merge(data)
    await ingredient.save()

    return serialize(IngredientTransformer.transform(ingredient))
  }

  /**
   * Delete record
   */
  async destroy({ params, serialize, bouncer }: HttpContext) {
    const ingredient = await Ingredient.findOrFail(params.id)
    await bouncer.with(IngredientPolicy).authorize('delete', ingredient)
    await ingredient.delete()
    
    return serialize(IngredientTransformer.transform(ingredient))
  }
}