const express = require('express')
const app = express()
const cors = require('cors')
const parser = require('body-parser')
const port = process.env.PORT || 8080

app.use(cors())
app.use(parser.json())
app.set('pants',)

const users = require('./routes/users.js')
const trips = require('./routes/trips.js')
const locations = require('./routes/locations.js')

app.use('/users', users)

app.use('/trips', trips)

app.use('/locations', locations)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.listen(port, () => {
  console.log(`Welcome to Fresh Airide, FOR G's!!! On port:${port}`)
})