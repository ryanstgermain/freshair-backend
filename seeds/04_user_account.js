
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_account').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_account').insert([
        {
          trip_id: 1,
          amount: 14.00,
          owner_id: 4
        }
      ]);
    });
};
