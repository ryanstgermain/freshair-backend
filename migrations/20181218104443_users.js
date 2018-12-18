
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (user) => {
        user.increments('id')
        user.string('user_name')
        user.string('password')
        user.string('first_name')
        user.string('last_name')
        user.integer('age')
        user.boolean('driver').default(false)
        user.integer('vehicle_id').default(null)
        user.foreign('vehicle_id').references('vehicles.id')
        user.integer('trip_id').default(null)
        user.foreign('trip_id').references('trips.id')
    })
  }
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('users')
  }
