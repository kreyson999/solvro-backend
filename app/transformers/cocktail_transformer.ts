import { BaseTransformer } from '@adonisjs/core/transformers'
import Cocktail from '#models/cocktail'
import IngredientTransformer from '#transformers/ingredient_transformer'

export default class CocktailTransformer extends BaseTransformer<Cocktail> {
  toObject() {
    return {
      ...this.pick(this.resource, ['id', 'name', 'category', 'instructions']),
      ingredients: IngredientTransformer.transform(this.whenLoaded(this.resource.ingredients))
    }
  }
}