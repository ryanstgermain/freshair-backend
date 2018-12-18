const db = require('../database-connection')

module.exports = {
  putNewTrip(trip_id, user_id){
    return db('users').where('id', user_id).update('trip_id', trip_id)
  }
}