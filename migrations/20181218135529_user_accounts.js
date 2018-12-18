
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_accounts', user_account => {
    user_account.increments('id')
    user_account.decimal('amount', 8, 2)
    user_account.integer('trip_id')
    user_account.foreign('trip_id').references('trips.id')
    user_account.integer('user_id')
    user_account.foreign('user_id').references('users.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_accounts')
};
