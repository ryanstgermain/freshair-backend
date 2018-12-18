const db = require('../database-connection')

module.exports = {
  getAllLocations(){
    return db('locations')
  },
  getLocationByName(name){
    return db('locations').where('resort_name', name).returning('*')
  }
}