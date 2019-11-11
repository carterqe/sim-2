require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()
const controller = require('./controller')
app.use(express.json())
const {SERVER_PORT, CONNECTION_STRING} = process.env
const massive = require('massive')


massive(CONNECTION_STRING).then(databaseConnection => {
  app.set('db', databaseConnection)
  console.log("Don't look now but there is")
  app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} bald chickens.`))
})

app.get('/api/property', controller.readProperty)
app.put('/api/property/:id', controller.updateProperty)
app.post('/api/property', controller.createProperty)
app.delete('/api/property/:id', controller.deleteProperty)