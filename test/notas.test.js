const supertest = require('supertest')
const mongoose = require('mongoose')
const { app, server } = require('../index')

const api = supertest(app)

test('Las notas se regresan en tipo Json', async () => {
  await api
    .get('/api/v1/notas')
    .expect(200)
    .expect('Content-Type', /application\/json/)
}, 15000)

afterAll(() => {
  mongoose.connection.close()
  server.close()
})
