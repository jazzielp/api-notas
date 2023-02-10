require('dotenv').config()
require('./mongo')

const express = require('express')
const app = express()
const routerApi = require('./routers')
const port = process.env.PORT || 3000

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Servidor en linea')
})

routerApi(app)

const server = app.listen(port, () => {
  console.log('Escuchando en el puerto' + port)
})

module.exports = { app, server }
