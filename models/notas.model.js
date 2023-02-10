const { model, Schema } = require('mongoose')

const notasSchema = new Schema({
  content: String,
  date: Date,
  important: Boolean,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
  }
})

notasSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id
    delete returnObject._id
    delete returnObject.__v
  }
})

const Nota = model('Nota', notasSchema)

module.exports = Nota
