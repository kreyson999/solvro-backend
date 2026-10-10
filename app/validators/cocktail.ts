import vine from '@vinejs/vine'
import { paginationFields } from '#validators/pagination'

const name = () => vine.string().trim().minLength(3).maxLength(50)
const category = () => vine.string().trim().minLength(3).maxLength(50)
const instructions = () => vine.string().trim().minLength(10).maxLength(1000)
const ingredients = () => vine.array(vine.object({
    id: vine.number().withoutDecimals().exists({ table: 'ingredients', column: 'id' }),
    measure: vine.string().trim().minLength(1).maxLength(50),
  })).minLength(1).distinct('id')


export const listCocktailsValidator = vine.create({
  search: vine.string().trim().minLength(1).maxLength(50),
  category: vine.string().trim().minLength(1).maxLength(50),
  alcoholic: vine.boolean().optional(),
  ingredientIds: vine
    .string()
    .regex(/^\d+(,\d+)*$/)
    .transform((value) => value.split(',').map(Number))
    .optional(),
  userId: vine.number().withoutDecimals().min(1).optional(),
  sort: vine.enum(['name', 'category', 'createdAt']).optional(),
  order: vine.enum(['asc', 'desc']).optional(),
  ...paginationFields
})

export const createCocktailValidator = vine.create({
  name: name(),
  category: category(),
  instructions: instructions(),
  ingredients: ingredients(),
})

export const updateCocktailValidator = vine.create({
  name: name().optional(),
  category: category().optional(),
  instructions: instructions().optional(),
  ingredients: ingredients().optional()
})