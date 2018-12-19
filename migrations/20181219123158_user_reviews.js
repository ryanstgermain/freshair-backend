
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_reviews', user_review => {
    user_review.increments('id')
    user_review.integer('rating')
    user_review.text('user_review')
    user_review.text('vehicle_review')
    user_review.integer('user_id')
    user_review.foreign('user_id').references('users.id')
    user_review.integer('reviewer_id')
    user_review.foreign('reviewer_id').references('users.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_reviews')
};
