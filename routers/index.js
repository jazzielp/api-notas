const express = require('express')
const router = express.Router()
const notasRouter = require('./notas.router')

const routerApi = app => {
  app.use('/api/v1', router)
  router.use('/notas', notasRouter)
}

module.exports = routerApi
