const express = require('express')
const router = express.Router()
const queries = require('../queries/users_queries.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pants = require('../database-connection.js')[1]

function tokenCreation(user_name){
  let tokenID = { user: user_name }
  let token = jwt.sign(tokenID, pants, { expiresIn: 18000 });
  return token
}

router.route('/login')

  .get(async (req, res, next) => {
    if( req.body.user_name === '' || req.body.password === '' ) {
      return next({ status: 404, message: 'Please fill out all required fields.' })
    }
    let user = await queries.loginUser(req.body.user_name)
    if( bcrypt.compareSync(req.body.password, user.password) ){
      user = { ...user, password: "pants", token: tokenCreation() }
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
      justUser = { ...justUser, token: tokenCreation() }
      res.status(201).send(justUser)
    })
  })

router.use((req, res, next) => {
  var token = req.body.token 
  if (token) {
    jwt.verify(token, pants, (err, decoded) => {
      if (err) {
        return next({ status: 400, message: 'Failed to authenticate.' })  
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    return next({ status: 400, message: 'No token provided.' }) 
  }
})

router.route('/home')
  .get((req, res) => {
    queries.getHomeInfo(req.body.user_id).then(homeInfo => res.status(200).send(homeInfo))
  })

// router.route('/:id')

module.exports = router