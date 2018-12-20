
exports.up = function(knex, Promise) {
    return knex.schema.createTable('trips', (trip) => {
        trip.increments('id')
        trip.date('date')
        trip.integer('seats_availible')
        trip.decimal('seat_price', 8, 2)
        trip.time('start_time')
        trip.time('end_time')
        trip.integer('location_id')
        trip.foreign('location_id').references('locations.id')
    }) 
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('trips')
}
