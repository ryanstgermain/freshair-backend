
exports.up = function(knex, Promise) {
    return knex.schema.createTable('trips', (trip) => {
        trip.increments('id')
        trip.text('meetup_location')
        trip.integer('seats_avalible')
        trip.decimal('seat_price', 8, 2)
        trip.integer('start_time')
        trip.integer('end_time')
        trip.integer('location_id')
        trip.foreign('location_id').references('locations.id')
        trip.integer('user_id')
        trip.foreign('user_id').references('users.id')
    }) 
};

exports.down = function(knex, Promise) {
  
};
