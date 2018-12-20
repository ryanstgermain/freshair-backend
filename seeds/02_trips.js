
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {
            location_id: 1,
            date: 20190105,
            seats_available: 1,
            seat_price: 20.00,
            start_time: '06:00',
            end_time: '18:00'
        },
        {
            location_id: 2,
            date: 20190105,
            seats_available: 3,
            seat_price: 10.00,
            start_time: '06:00',
            end_time: '18:00'
        }, 
        {
            location_id: 3,
            date: 20190105,
            seats_available: 2,
            seat_price: 15.00,
            start_time: '06:00',
            end_time: '18:00'
        },
        {
            location_id: 4,
            date: 20190105,
            seats_available: 1,
            seat_price: 20.00,
            start_time: '06:00',
            end_time: '18:00'
        }
      ])
    })
}
