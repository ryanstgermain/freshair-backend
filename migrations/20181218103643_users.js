
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (user) => {
        user.increments('id')
        user.string('userName')
        user.string('firstName')
        user.string('lastName')
        user.integer('age')
        user.integer('vehicle_id')
        user.foreign('vehicle_id').references('vehicles.id')
        user.integer('trip_id')
        user.foreign('trip_id').references('trips.id')
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('users')
  };
