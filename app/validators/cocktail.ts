import vine from '@vinejs/vine'

const name = () => vine.string().trim().minLength(3).maxLength(50)
const category = () => vine.string().trim().minLength(3).maxLength(50)
const instructions = () => vine.string().trim().minLength(10).maxLength(1000)
const ingredients = () => vine.array(vine.object({
    id: vine.number().withoutDecimals().exists({ table: 'ingredients', column: 'id' }),
    measure: vine.string().trim().minLength(1).maxLength(50),
  })).minLength(1).distinct('id')


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