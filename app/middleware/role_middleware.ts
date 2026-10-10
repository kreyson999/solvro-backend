import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class RoleMiddleware {
  async handle(ctx: HttpContext, next: NextFn, options: { roles: string[] }) {
    const user = ctx.auth.getUserOrFail()

    if (!options.roles.includes(user.role)){
      return ctx.response.forbidden({ message: "No permissions"})
    }

    const output = await next()
    return output
  }
}