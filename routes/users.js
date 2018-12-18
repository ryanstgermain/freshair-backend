const express = require('express')
const router = express.Router()
const queries = require('../queries/users_queries.js')

router.route('/')

  .get((req, res, next) => {

  })

  .post((req, res, next) => {

  })

router.param(['id'], async (req, res, next, value) => {

})

router.route('/:id')

module.exports = router