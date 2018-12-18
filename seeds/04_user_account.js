
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_accounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_accounts').insert([
        {
          trip_id: 1,
          amount: 14.00,
          owner_id: 4
        }
      ]);
    });
};
