/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/signup',
    tokens: [{"old":"/api/v1/auth/signup","type":0,"val":"api","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_tokens.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_tokens.store']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [{"old":"/api/v1/account/profile","type":0,"val":"api","end":""},{"old":"/api/v1/account/profile","type":0,"val":"v1","end":""},{"old":"/api/v1/account/profile","type":0,"val":"account","end":""},{"old":"/api/v1/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
  'profile.access_tokens.destroy': {
    methods: ["POST"],
    pattern: '/api/v1/account/logout',
    tokens: [{"old":"/api/v1/account/logout","type":0,"val":"api","end":""},{"old":"/api/v1/account/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/account/logout","type":0,"val":"account","end":""},{"old":"/api/v1/account/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['profile.access_tokens.destroy']['types'],
  },
  'cocktails.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/cocktails',
    tokens: [{"old":"/api/v1/cocktails","type":0,"val":"api","end":""},{"old":"/api/v1/cocktails","type":0,"val":"v1","end":""},{"old":"/api/v1/cocktails","type":0,"val":"cocktails","end":""}],
    types: placeholder as Registry['cocktails.index']['types'],
  },
  'cocktails.store': {
    methods: ["POST"],
    pattern: '/api/v1/cocktails',
    tokens: [{"old":"/api/v1/cocktails","type":0,"val":"api","end":""},{"old":"/api/v1/cocktails","type":0,"val":"v1","end":""},{"old":"/api/v1/cocktails","type":0,"val":"cocktails","end":""}],
    types: placeholder as Registry['cocktails.store']['types'],
  },
  'cocktails.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/cocktails/:id',
    tokens: [{"old":"/api/v1/cocktails/:id","type":0,"val":"api","end":""},{"old":"/api/v1/cocktails/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/cocktails/:id","type":0,"val":"cocktails","end":""},{"old":"/api/v1/cocktails/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cocktails.show']['types'],
  },
  'cocktails.update': {
    methods: ["PUT","PATCH"],
    pattern: '/api/v1/cocktails/:id',
    tokens: [{"old":"/api/v1/cocktails/:id","type":0,"val":"api","end":""},{"old":"/api/v1/cocktails/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/cocktails/:id","type":0,"val":"cocktails","end":""},{"old":"/api/v1/cocktails/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cocktails.update']['types'],
  },
  'cocktails.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/cocktails/:id',
    tokens: [{"old":"/api/v1/cocktails/:id","type":0,"val":"api","end":""},{"old":"/api/v1/cocktails/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/cocktails/:id","type":0,"val":"cocktails","end":""},{"old":"/api/v1/cocktails/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cocktails.destroy']['types'],
  },
  'ingredients.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/ingredients',
    tokens: [{"old":"/api/v1/ingredients","type":0,"val":"api","end":""},{"old":"/api/v1/ingredients","type":0,"val":"v1","end":""},{"old":"/api/v1/ingredients","type":0,"val":"ingredients","end":""}],
    types: placeholder as Registry['ingredients.index']['types'],
  },
  'ingredients.store': {
    methods: ["POST"],
    pattern: '/api/v1/ingredients',
    tokens: [{"old":"/api/v1/ingredients","type":0,"val":"api","end":""},{"old":"/api/v1/ingredients","type":0,"val":"v1","end":""},{"old":"/api/v1/ingredients","type":0,"val":"ingredients","end":""}],
    types: placeholder as Registry['ingredients.store']['types'],
  },
  'ingredients.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/ingredients/:id',
    tokens: [{"old":"/api/v1/ingredients/:id","type":0,"val":"api","end":""},{"old":"/api/v1/ingredients/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/ingredients/:id","type":0,"val":"ingredients","end":""},{"old":"/api/v1/ingredients/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['ingredients.show']['types'],
  },
  'ingredients.update': {
    methods: ["PUT","PATCH"],
    pattern: '/api/v1/ingredients/:id',
    tokens: [{"old":"/api/v1/ingredients/:id","type":0,"val":"api","end":""},{"old":"/api/v1/ingredients/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/ingredients/:id","type":0,"val":"ingredients","end":""},{"old":"/api/v1/ingredients/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['ingredients.update']['types'],
  },
  'ingredients.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/ingredients/:id',
    tokens: [{"old":"/api/v1/ingredients/:id","type":0,"val":"api","end":""},{"old":"/api/v1/ingredients/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/ingredients/:id","type":0,"val":"ingredients","end":""},{"old":"/api/v1/ingredients/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['ingredients.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
