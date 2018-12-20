const express = require('express')
const router = express.Router()
const queries = require('../queries/trips_queries.js')
const jwt = require('jsonwebtoken')
const pants = require('../database-connection.js')[1]

// router.use((req, res, next) => {
//   var token = req.body.token 
//   if (token) {
//     jwt.verify(token, pants, (err, decoded) => {
//       if (err) {
//         return next({ status: 400, message: 'Failed to authenticate.' })  
//       } else {
//         req.decoded = decoded
//         next()
//       }
//     })
//   } else {
//     return next({ status: 400, message: 'No token provided.' }) 
//   }
// })

router.route('/')

  .get((req, res) => {
    queries.getAllTrips().then(trips => res.status(200).send(trips))
  })

module.exports = router