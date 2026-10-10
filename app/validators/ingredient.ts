import vine from '@vinejs/vine'

const name = () => vine.string().trim().minLength(2).maxLength(50)
const description = () => vine.string().trim().minLength(2).maxLength(500)
const isAlcoholic = () => vine.boolean()
const imageUrl = () => vine.string().trim().url({ require_protocol: true, protocols: ['http', 'https'] }).maxLength(255)

export const createIngredientValidator = vine.create({
  name: name(),
  description: description(),
  isAlcoholic: isAlcoholic(),
  imageUrl: imageUrl(),
})

export const updateIngredientValidator = vine.create({
  name: name().optional(),
  description: description().optional(),
  isAlcoholic: isAlcoholic().optional(),
  imageUrl: imageUrl().optional(),
})