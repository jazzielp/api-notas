const Joi = require('joi')

const id = Joi.string.max(24)
const content = Joi.string
const important = Joi.boolean

const createNotaSchema = Joi.object({
  content: content.required(),
  important
})

const updateNotaSchema = Joi.object({
  content,
  important
})

const getNotaSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createNotaSchema,
  updateNotaSchema,
  getNotaSchema
}
