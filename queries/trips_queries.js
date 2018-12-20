const db = require('../database-connection')

module.exports = {
  getAllTrips(){
    return db[0]('trips')
  }
}