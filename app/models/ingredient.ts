import { IngredientSchema } from '#database/schema'
import { manyToMany } from '@adonisjs/lucid/orm'
import Cocktail from '#models/cocktail'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Ingredient extends IngredientSchema {
    @manyToMany(() => Cocktail, {
        pivotColumns: ['measure'],
        pivotTimestamps: true,
    })
    declare cocktails: ManyToMany<typeof Cocktail>
}