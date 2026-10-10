import { BaseTransformer } from '@adonisjs/core/transformers'
import Ingredient from '#models/ingredient'

export default class IngredientTransformer extends BaseTransformer<Ingredient> {
  toObject() {
    return {
      ...this.pick(this.resource, ['id', 'name', 'description', 'isAlcoholic', 'imageUrl']),
      measure: this.when(
        'pivot_measure' in this.resource.$extras,
        () => this.resource.$extras.pivot_measure as string
      ),
    }
  }
}
