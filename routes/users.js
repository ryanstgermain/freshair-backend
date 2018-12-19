const express = require('express')
const router = express.Router()
const queries = require('../queries/users_queries.js')
const bcrypt = require('bcrypt')


router.route('/login')

  .get(async (req, res, next) => {
    if( req.body.user_name === '' || req.body.password === '' ) {
      return  next({ status: 404, message: 'Please fill out all required fields.' })
    }
    let user = await queries.loginUser(req.body.user_name)
    if( bcrypt.compareSync(req.body.password, user.password) ){
      user = { ...user, login: true }
      res.status(200).send(user)
    } else { 
      next({ status: 404, message: 'Username, password, or both, are invalid.' }) 
    }  
  })

router.route('/signup')

  .post(async (req, res, next) => {
    let valueChecks = Object.values(req.body)
    if(valueChecks.indexOf('') !== -1) return next({ status: 400, message: 'Please fill out all required fields.' })
    let usedNames = await queries.getAllUsernames().map(item => item.user_name )
    if(usedNames.indexOf(req.body.user_name) !== -1) return next({ status: 400, message: 'Please pick a different username.' })
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

router.route('/:user_name/home/:user_id')
  .get(async (req, res) => {
    let id = req.params.user_id
    let userViewed = req.params.user_name
    let user = await queries.getUserByUsername(userViewed)
    if( user.id === id ){
      queries.getHomeInfo(id)
    } else { 

    }  
  })

// router.route('/:id')

module.exports = router