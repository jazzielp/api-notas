const { model, Schema } = require('mongoose')

const usuarioSchema = new Schema({
  username: String,
  name: String,
  passwordHash: String,
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'Nota'
  }]
})

usuarioSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id
    delete returnObject._id
    delete returnObject.__v
    delete returnObject.passwordHash
  }
})

const Usuario = model('Usuario', usuarioSchema)

module.exports = Usuario
