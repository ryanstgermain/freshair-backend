const db = require('./database_connection')

module.exports = {
    getAllUserAccounts() {
        return db('vehicles')
    },
    getVehicleById(id) {
        return db('vehicles').where('id', id)
    },
    createVehicle(newVehicle) {
        return db('vehicles').insert(newVehicle).returning('*')
    },
    deleteVehicle(id) {
        return db('vehicles').where('id', id).delete()
    },
    updateVehicle(id, vehicle) {
        return db('vehicles').where('id', id).update(vehicle).returning('*')
    }
}