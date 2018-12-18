
exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', location => {
    location.increments('id')
    location.string('resort_name')
    location.text('location_url')
    location.integer('base_elevation')
    location.integer('summit_elevation')
    location.text('rental_url')
    location.text('weather_url')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('locations')
}
