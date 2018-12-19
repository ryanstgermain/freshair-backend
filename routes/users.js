const express = require('express')
const router = express.Router()
const queries = require('../queries/users_queries.js')
const bcrypt = require('bcrypt')

router.route('/login')

  .get(async (req, res, next) => {
    if( req.body.user_name === '' || req.body.password === '' ) {
      next({ status: 404, message: 'Please fill out all required fields.' })
    }
    let user = await queries.getUserByUsername(req.body.user_name)
    if( bcrypt.compareSync(req.body.password, user.password) ){
      user = { ...user, login: true }
      res.status(200).send(user)
    } else { 
      next({ status: 404, message: 'Username, password, or both, are invalid.' }) 
    }  
  })

  .post((req, res, next) => {
    let valueChecks = Object.values(req.body)
    valueChecks.indexOf('') !== -1 && next({ status: 400, message: 'Please fill out all required fields.' })
    let user = {
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10)
    }
    queries.createNewUser(user).then(newUser => {
      justUser = newUser[0]
      justUser = { ...justUser, login: true }
      res.status(201).send(justUser)
    })
  })

router.route('/:user_name/home')
  // router.param(['id'], async (req, res, next, value) => {

// })

// router.route('/:id')

module.exports = router