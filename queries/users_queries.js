const db = require('../database-connection')

module.exports = {
  getAllUsernames(){
    return db[0]('users')
      .select('user_name')
  },
  putNewTrip(trip_id, user_id){
    return db[0]('users')
      .where('id', user_id)
      .update('trip_id', trip_id)
  },
  loginUser(user_name){
    return db[0]('users')
      .select('id', 'password')
      .where('user_name', user_name )
      .first()
  },
  getUserByUsername(user_name){
    return db[0]('users')
      .select('id',)
      .where('user_name', user_name )
      .first()
  },
  createNewUser(user){
    return db[0]('users')
      .insert(user)
      .returning('*')
  },
  getHomeInfo(user_id){
    return db[0]('users')
      .select('*')
      .leftOuterJoin('vehicles', 'users.vehicle_id', 'vehicles.id')
      .leftOuterJoin('trips', 'users.trip_id', 'trips.id')
      .leftOuterJoin('locations', 'trips.location_id', 'locations.id')
      .where('users.id', user_id)
      .first()
  }
}