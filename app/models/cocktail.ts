import { CocktailSchema } from '#database/schema'
import { manyToMany } from '@adonisjs/lucid/orm'
import Ingredient from '#models/ingredient'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Cocktail extends CocktailSchema {
    @manyToMany(() => Ingredient, {
        pivotColumns: ['measure'],
        pivotTimestamps: true,
    })
    declare ingredients: ManyToMany<typeof Ingredient>
}