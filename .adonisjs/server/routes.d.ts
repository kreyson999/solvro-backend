import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'cocktails.index': { paramsTuple?: []; params?: {} }
    'cocktails.store': { paramsTuple?: []; params?: {} }
    'cocktails.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'cocktails.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'cocktails.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'ingredients.index': { paramsTuple?: []; params?: {} }
    'ingredients.store': { paramsTuple?: []; params?: {} }
    'ingredients.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'ingredients.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'ingredients.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'cocktails.store': { paramsTuple?: []; params?: {} }
    'ingredients.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'cocktails.index': { paramsTuple?: []; params?: {} }
    'cocktails.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'ingredients.index': { paramsTuple?: []; params?: {} }
    'ingredients.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'cocktails.index': { paramsTuple?: []; params?: {} }
    'cocktails.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'ingredients.index': { paramsTuple?: []; params?: {} }
    'ingredients.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'cocktails.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'ingredients.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'cocktails.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'ingredients.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'cocktails.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'ingredients.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}