import vine from '@vinejs/vine'

const page = () => vine.number().withoutDecimals().min(1)
const perPage = () => vine.number().withoutDecimals().min(1).max(100)

export const paginationValidator = vine.create({
  page: page().optional(),
  perPage: perPage().optional(),
})