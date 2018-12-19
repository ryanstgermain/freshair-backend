
exports.up = function(knex, Promise) {
  return knex.schema.createTable('location_reviews', location_review => {
    location_review.increments('id')
    location_review.integer('rating')
    location_review.text('location_review')
    location_review.integer('location_id')
    location_review.foreign('location_id').references('locations.id')
    location_review.integer('reviewer_id')
    location_review.foreign('reviewer_id').references('locations.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('location_reviews')
}
