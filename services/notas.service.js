const Nota = require('../models/notas.model')
const Usuario = require('../models/usuario.model')

class NotasService {
  constructor () {
    this.listNotas = []
  }

  async find () {
    const listNotas = await Nota.find({}).populate('user', {
      username: 1,
      name: 1
    })
    return listNotas
  }

  async findOne (id) {
    const nota = await Nota.findById(id)
    if (!nota) {
      return 'Nota no encontrada'
    } else {
      return nota
    }
  }

  async update (id, data) {
    const updatedNote = await Nota.findByIdAndUpdate(id, data, { new: true })
    return updatedNote
  }

  async create (data) {
    const { content, important, userId } = data
    const user = await Usuario.findById(userId)

    const note = Nota({
      content,
      date: new Date(),
      important: important || false,
      user: user._id

    })
    const newNote = await note.save()
    user.notes = user.notes.concat(newNote._id)
    await user.save()
    return newNote
  }

  async delete (id) {
    const nota = await Nota.findByIdAndRemove(id)
    return nota
  }
}

module.exports = NotasService
