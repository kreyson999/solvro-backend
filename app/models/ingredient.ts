import { IngredientSchema } from '#database/schema'
import { belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import Cocktail from '#models/cocktail'
import User from '#models/user'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Ingredient extends IngredientSchema {
    @manyToMany(() => Cocktail, {
        pivotColumns: ['measure'],
        pivotTimestamps: true,
    })
    declare cocktails: ManyToMany<typeof Cocktail>

    @belongsTo(() => User, {
        foreignKey: 'userId'
    })
    declare author: BelongsTo<typeof User>
}