import User from '#models/user'
import Ingredient from '#models/ingredient'
import { BasePolicy } from '@adonisjs/bouncer'
import type { AuthorizerResponse } from '@adonisjs/bouncer/types'

export default class IngredientPolicy extends BasePolicy {
    before(user: User | null) {
        if (user?.role === 'admin') {
            return true
        }
    }

    create(): AuthorizerResponse {
        return true
    }

    update(user: User, ingredient: Ingredient): AuthorizerResponse {
        return user.id === ingredient.userId
    }

    delete(user: User, ingredient: Ingredient): AuthorizerResponse {
        return user.id === ingredient.userId
    }
  
}