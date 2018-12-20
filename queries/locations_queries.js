const db = require('../database-connection')

module.exports = {
  getAllLocations(){
    return db[0]('locations')
  },
  getLocationByName(name){
    return db[0]('locations').where('resort_name', name).first()
  }
}