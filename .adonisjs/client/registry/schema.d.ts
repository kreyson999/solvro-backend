/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'auth.new_account.store': {
    methods: ["POST"]
    pattern: '/api/v1/auth/signup'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').signupValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'auth.access_tokens.store': {
    methods: ["POST"]
    pattern: '/api/v1/auth/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').loginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').loginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'profile.profile.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/account/profile'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
    }
  }
  'profile.access_tokens.destroy': {
    methods: ["POST"]
    pattern: '/api/v1/account/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
    }
  }
  'cocktails.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/cocktails'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: ExtractQueryForGet<InferInput<(typeof import('#validators/cocktail').listCocktailsValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cocktails_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cocktails_controller').default['index']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'cocktails.store': {
    methods: ["POST"]
    pattern: '/api/v1/cocktails'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/cocktail').createCocktailValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/cocktail').createCocktailValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cocktails_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cocktails_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'cocktails.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/cocktails/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cocktails_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cocktails_controller').default['show']>>>
    }
  }
  'cocktails.update': {
    methods: ["PUT","PATCH"]
    pattern: '/api/v1/cocktails/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/cocktail').updateCocktailValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/cocktail').updateCocktailValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cocktails_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cocktails_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'cocktails.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/cocktails/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cocktails_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cocktails_controller').default['destroy']>>>
    }
  }
  'ingredients.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/ingredients'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: ExtractQueryForGet<InferInput<(typeof import('#validators/pagination').paginationValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/ingredients_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/ingredients_controller').default['index']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'ingredients.store': {
    methods: ["POST"]
    pattern: '/api/v1/ingredients'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/ingredient').createIngredientValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/ingredient').createIngredientValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/ingredients_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/ingredients_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'ingredients.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/ingredients/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/ingredients_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/ingredients_controller').default['show']>>>
    }
  }
  'ingredients.update': {
    methods: ["PUT","PATCH"]
    pattern: '/api/v1/ingredients/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/ingredient').updateIngredientValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/ingredient').updateIngredientValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/ingredients_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/ingredients_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'ingredients.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/ingredients/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/ingredients_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/ingredients_controller').default['destroy']>>>
    }
  }
}
