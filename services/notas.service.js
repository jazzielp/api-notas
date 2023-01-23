class NotasService {
  constructor () {
    this.listNotas = []
  }

  find () {
    return 'Find from service'
  }

  findOne (id) {
    return 'Find One from service'
  }

  update (id, data) {
    return 'update from service'
  }

  create (data) {
    return 'Create from service'
  }

  delete (id) {
    return 'Delete from service'
  }
}

module.exports = NotasService
