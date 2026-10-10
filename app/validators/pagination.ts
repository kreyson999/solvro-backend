import vine from '@vinejs/vine'

const page = () => vine.number().withoutDecimals().min(1)
const perPage = () => vine.number().withoutDecimals().min(1).max(100)

export const paginationFields = {
  page: page().optional(),
  perPage: perPage().optional(),
}

export const paginationValidator = vine.create(paginationFields)