
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function () {
      // Inserts seed entries
      return knex('vehicles').insert([
        {
          make: 'Ford',
          model: 'Mustang',
          year: 2018,
          drivetrain: 'RWD',
          passenger_available: 3,
          plate_number: '420 WEE',
        },
        {
          make: 'Subaru',
          model: 'STi',
          year: 2018,
          drivetrain: 'AWD',
          passenger_available: 3,
          plate_number: 'BRAAAAP',
        },
        {
          make: 'Toyota',
          model: 'Prius',
          year: 2015,
          drivetrain: 'FWD',
          passenger_available: 3,
          plate_number: 'SLOLYFE',
        },
        {
          make: 'Ford',
          model: 'Mustang',
          year: 2018,
          drivetrain: 'RWD',
          passenger_available: 3,
          plate_number: '420 WEE',
        }
      ])
    })
}
