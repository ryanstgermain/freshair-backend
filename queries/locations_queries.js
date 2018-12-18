const db = require('../database-connection')

module.exports = {
  getAllLocations(){
    return db('locations')
  }
}