const express = require('express')
const app = express()
const routerApi = require('./routers')
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Servidor en linea')
})

routerApi(app)

app.listen(port, () => {
  console.log('Escuchando en el puerto' + port)
})
