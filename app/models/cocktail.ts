import { CocktailSchema } from '#database/schema'
import { belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import Ingredient from '#models/ingredient'
import User from '#models/user'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Cocktail extends CocktailSchema {
    @manyToMany(() => Ingredient, {
        pivotColumns: ['measure'],
        pivotTimestamps: true,
    })
    declare ingredients: ManyToMany<typeof Ingredient>

    @belongsTo(() => User, {
        foreignKey: 'userId'
    })
    declare author: BelongsTo<typeof User>
}