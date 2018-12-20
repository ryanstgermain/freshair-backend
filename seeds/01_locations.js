exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          resort_name: 'Winter Park',
          base_elevation: 9000,
          summit_elevation: 12060,
          rental_url: 'https://www.winterparkresort.com/plan-your-trip/rentals/ski-and-board',
          weather_url: 'https://www.winterparkresort.com/the-mountain/mountain-report#/'
        },
        {
          resort_name: 'Copper Mountain',
          base_elevation: 9712,
          summit_elevation: 12441,
          rental_url: 'https://www.coppercolorado.com/plan-your-trip/lessons-rentals/ski-rentals',
          weather_url: 'https://www.coppercolorado.com/the-mountain/conditions-weather/weather-forecast'
        },
        {
          resort_name: 'Keystone',
          base_elevation: 9280,
          summit_elevation: 12408,
          rental_url: 'https://www.rentskis.com/#!/resort/keystone-resort',
          weather_url: 'https://www.keystoneresort.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx'
        },
        {
          resort_name: 'Steamboat',
          base_elevation: 6900,
          summit_elevation: 10568,
          rental_url: 'https://www.steamboat.com/plan-your-trip/rentals/ski-and-snowboard',
          weather_url: 'https://www.steamboat.com/the-mountain/mountain-report#/lifts'
        },
        {
          resort_name: 'Vail',
          base_elevation: 8120,
          summit_elevation: 11570,
          rental_url: 'https://www.rentskis.com/#!/resort/vail-resort',
          weather_url: 'https://www.vail.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx'
        }
      ])
    })
}
