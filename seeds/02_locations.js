exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          resort_name: 'Winter Park',
          location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24924.8772038285!2d-105.78126958154367!3d39.893360213538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bcaa5589c4a23%3A0x9ad1168e578def16!2sWinter+Park+Resort!5e0!3m2!1sen!2sus!4v1545156144860', 
          base_elevation: 9000,
          summit_elevation: 12060,
          rental_url: 'https://www.winterparkresort.com/plan-your-trip/rentals/ski-and-board',
          weather_url: 'https://www.winterparkresort.com/the-mountain/mountain-report#/'
        },
        {
          resort_name: 'Copper Mountain',
          location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7059.464037673347!2d-106.15110288027321!3d39.50032119977806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876a5ff8a6c85dfb%3A0xb77361e448db681!2sCopper+Mountain!5e0!3m2!1sen!2sus!4v1545158876369',
          base_elevation: 9712,
          summit_elevation: 12441,
          rental_url: 'https://www.coppercolorado.com/plan-your-trip/lessons-rentals/ski-rentals',
          weather_url: 'https://www.coppercolorado.com/the-mountain/conditions-weather/weather-forecast'
        },
        {
          resort_name: 'Keystone',
          location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.8331063490923!2d-105.94585798421767!3d39.60844187946726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876a5a02238af65b%3A0xf32799b7df0fabaf!2sKeystone+Resort!5e0!3m2!1sen!2sus!4v1545159104742',
          base_elevation: 9280,
          summit_elevation: 12408,
          rental_url: 'https://www.rentskis.com/#!/resort/keystone-resort',
          weather_url: 'https://www.keystoneresort.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx'
        },
        {
          resort_name: 'Steamboat',
          location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.8175590314504!2d-106.80672138419705!3d40.457174779360514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87426eb8d8ae745d%3A0x22d33717981f9f23!2sSteamboat+Ski+Resort!5e0!3m2!1sen!2sus!4v1545159346411',
          base_elevation: 6900,
          summit_elevation: 10568,
          rental_url: 'https://www.steamboat.com/plan-your-trip/rentals/ski-and-snowboard',
          weather_url: 'https://www.steamboat.com/the-mountain/mountain-report#/lifts'
        },
        {
          resort_name: 'Vail',
          location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.9351018996517!2d-106.3571603842177!3d39.60614437946778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876a7060c630dbdb%3A0xa7c2cf2d4b45ada2!2sVail+Ski+Resort!5e0!3m2!1sen!2sus!4v1545159659810',
          base_elevation: 8120,
          summit_elevation: 11570,
          rental_url: 'https://www.rentskis.com/#!/resort/vail-resort',
          weather_url: 'https://www.vail.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx'
        }
      ]);
    });
};
