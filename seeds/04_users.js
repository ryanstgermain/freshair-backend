
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          user_name: 'WReX',
          password: 'freshair',
          first_name: 'Jess',
          last_name: 'Markgraf',
          age: 34,
          vehicle_id: 1,
          trip_id: 1,
          driver: true
        },
        {
          user_name: 'NewCarSmell',
          password: 'freshair',
          first_name: 'Josh',
          last_name: 'Scala',
          age: 24,
          vehicle_id: 2,
          trip_id: 2,
          driver: true
        },
        {
          user_name: 'EssssGetit',
          password: 'freshair',
          first_name: 'Ryan',
          last_name: 'StGermain',
          age: 20,
          vehicle_id: 3,
          trip_id: 3,
          driver: true
        },
        {
          user_name: 'ThatTallDude',
          password: 'freshair',
          first_name: 'Trey',
          last_name: 'Young',
          age: 29,
          vehicle_id: 4,
          trip_id: 4,
          driver: true
        }
      ])
    })
}