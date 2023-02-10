const express = require('express')
const router = express.Router()
const UsuarioService = require('../services/usuarios.service')
const serviceUsuario = new UsuarioService()

router.get('/', (req, res) => {
  serviceUsuario.find()
    .then(resp => {
      res.json(resp)
    })
    .catch(err => {
      res.json(err)
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  serviceUsuario.findOne(id)
    .then(resp => {
      res.json(resp)
    })
    .catch(err => {
      res.json(err)
    })
})

router.post('/', (req, res) => {
  const data = req.body
  serviceUsuario.create(data)
    .then(resp => {
      res.json(resp)
    })
    .catch(err => {
      res.json(err)
    })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params

  serviceUsuario.update(id)
    .then(resp => {
      res.json(resp)
    })
    .catch(err => {
      res.json(err)
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  serviceUsuario.delete(id)
    .then(resp => {
      res.json(resp)
    })
    .catch(err => {
      res.json(err)
    })
})

module.exports = router
