const express = require('express')
const router = express.Router()
const NotasService = require('../services/notas.service')
const serviceNotas = new NotasService()

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const nota = await serviceNotas.findOne(id)
    res.json(nota)
  } catch (error) {
    res.status(503).send(error)
  }
})

router.get('/', async (req, res, next) => {
  const listNotas = await serviceNotas.find()
  res.json(listNotas)
})

router.post('/', async (req, res, next) => {
  const data = req.body

  if (data.content) {
    const nota = await serviceNotas.create(data)
    res.status(503).send(nota)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const data = req.body
    const nota = await serviceNotas.update(id, data)
    res.json(nota)
  } catch (error) {
    res.send(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  const nota = await serviceNotas.delete(id)
  res.json(nota)
})

module.exports = router
