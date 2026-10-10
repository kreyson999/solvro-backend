import User from '#models/user'
import Cocktail from '#models/cocktail'
import { BasePolicy } from '@adonisjs/bouncer'
import type { AuthorizerResponse } from '@adonisjs/bouncer/types'

export default class CocktailPolicy extends BasePolicy {
  before(user: User | null) {
    if (user?.role === 'admin') {
      return true
    }
  }

  create(): AuthorizerResponse {
    return true
  }

  update(user: User, cocktail: Cocktail): AuthorizerResponse {
    return cocktail.userId === user.id
  }

  delete(user: User, cocktail: Cocktail): AuthorizerResponse {
    return cocktail.userId === user.id
  }
}