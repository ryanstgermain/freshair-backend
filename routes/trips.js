const express = require('express')
const router = express.Router()
const queries = require('../queries/trips_queries.js')

router.route('/')

  .get((req, res) => {
    queries.getAllTrips().then(trips => res.status(200).send(trips))
  })

module.exports = router