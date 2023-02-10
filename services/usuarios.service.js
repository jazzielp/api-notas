const Usuario = require('../models/usuario.model')
const bcrypt = require('bcrypt')

class UsuarioService {
  async find () {
    const listUsuarios = await Usuario.find({}).populate('notes', {
      content: 1,
      date: 1,
      important: 1
    })
    return listUsuarios
  }

  findOne (id) {
    return 'Fineone from service'
  }

  async create (data) {
    const { username, name, password } = data
    const passwordHash = await bcrypt.hash(password, 10)
    const newUser = new Usuario({
      username,
      name,
      passwordHash
    })
    const user = await newUser.save()
    return user
  }

  update (id, data) {
    return 'Update from service'
  }

  delete (id) {
    return 'Delete from service'
  }
}

module.exports = UsuarioService
