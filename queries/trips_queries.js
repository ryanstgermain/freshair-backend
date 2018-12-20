const db = require('../database-connection')

module.exports = {
  getAllTrips(){
    return db[0]('trips').select('trips.*', 'locations.resort_name').innerJoin('locations', 'trips.location_id', 'locations.id')
  }
}