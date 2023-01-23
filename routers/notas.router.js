const express = require('express')
const router = express.Router()
const NotasService = require('../services/notas.service')
const serviceNotas = new NotasService()

router.get('/:id', async (req, res, next) => {
  const nota = await serviceNotas.findOne()
  res.send(nota)
})

router.get('/', async (req, res, next) => {
  const listNotas = await serviceNotas.find()
  res.send(listNotas)
})

router.post('/', async (req, res, next) => {
  const nota = await serviceNotas.create()
  res.send(nota)
})

router.patch('/:id', async (req, res, next) => {
  const nota = await serviceNotas.update()
  res.send(nota)
})

router.delete('/:id', async (req, res, next) => {
  const nota = await serviceNotas.delete()
  res.send(nota)
})

module.exports = router
