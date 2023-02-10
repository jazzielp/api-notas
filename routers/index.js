const express = require('express')
const router = express.Router()
const notasRouter = require('./notas.router')
const usuariosRouter = require('./usuarios.router')

const routerApi = app => {
  app.use('/api/v1', router)
  router.use('/notas', notasRouter)
  router.use('/usuarios', usuariosRouter)
}

module.exports = routerApi
