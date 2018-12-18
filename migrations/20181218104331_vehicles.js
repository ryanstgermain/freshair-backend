
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vehicles', vehicle => {
    vehicle.increments('id')
    vehicle.string('make')
    vehicle.string('model')
    vehicle.integer('year')
    vehicle.string('drivetrain')
    vehicle.integer('passenger_available')
    vehicle.string('plate_number')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('vehicles')
};
