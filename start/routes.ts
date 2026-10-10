/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router
  .group(() => {
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessTokens, 'store'])
      })
      .prefix('auth')
      .as('auth')

    router
      .group(() => {
        router.get('profile', [controllers.Profile, 'show'])
        router.post('logout', [controllers.AccessTokens, 'destroy'])
      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())

    router
      .resource('cocktails', controllers.Cocktails)
      .apiOnly()
      .where('id', router.matchers.number())
      .use(['store', 'update', 'destroy'], [middleware.auth(), middleware.role({ roles: ['admin'] })])

    router
      .resource('ingredients', controllers.Ingredients)
      .apiOnly()
      .where('id', router.matchers.number())
      .use(['store', 'update', 'destroy'], [middleware.auth(), middleware.role({ roles: ['admin'] })])

    
  })
  .prefix('/api/v1')
