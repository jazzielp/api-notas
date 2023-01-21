const express = require('express')
const router = express.Router()

router.get('/:id', (req, res, next) => {
  res.send('Get one de notas')
})

router.get('/', (req, res, next) => {
  res.send('Get de notas')
})

router.post('/', (req, res, next) => {
  res.send('Post de notas')
})

router.patch('/:id', (req, res, next) => {
  res.send('Patch de notas')
})

router.delete('/:id', (req, res, next) => {
  res.send('Get de notas')
})

module.exports = router
