const db = require('../database-connection')

module.exports = {
  getAllUsernames(){
    return db('users').select('user_name')
  },
  putNewTrip(trip_id, user_id){
    return db('users').where('id', user_id).update('trip_id', trip_id)
  },
  loginUser(user_name){
    return db('users').where('user_name', user_name ).first()
  },
  getUserByUsername(user_name){
    return db('users').select('id',).where('user_name', user_name ).first()
  },
  createNewUser(user){
    return db('users').insert(user).returning('*')
  }
}