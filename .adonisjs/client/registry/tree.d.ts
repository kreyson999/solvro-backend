/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
    accessTokens: {
      destroy: typeof routes['profile.access_tokens.destroy']
    }
  }
  cocktails: {
    index: typeof routes['cocktails.index']
    store: typeof routes['cocktails.store']
    show: typeof routes['cocktails.show']
    update: typeof routes['cocktails.update']
    destroy: typeof routes['cocktails.destroy']
  }
  ingredients: {
    index: typeof routes['ingredients.index']
    store: typeof routes['ingredients.store']
    show: typeof routes['ingredients.show']
    update: typeof routes['ingredients.update']
    destroy: typeof routes['ingredients.destroy']
  }
}
