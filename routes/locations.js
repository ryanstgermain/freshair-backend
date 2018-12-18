const express = require('express')
const router = express.Router()
const queries = require('../queries/locations_queries.js')

router.route('/')

  .get((req, res) => {
    queries.getAllLocations().then(locations => res.status(200).send(locations))
  })

module.exports = router