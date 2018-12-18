
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {
            location_id: 1,
            meetup_location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.2009245760673!2d-105.00159128420317!3d39.757596979447214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78e83af8eac5%3A0x2e352b220e0be8ca!2s1917+Chestnut+Pl%2C+Denver%2C+CO+80202!5e0!3m2!1sen!2sus!4v1545159167187',
            user_id: 1,
            seats_avalible: 1,
            seat_price: 20.00,
            start_time: 0600,
            end_time: 1800
        },
        {
            location_id: 2,
            meetup_location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.1047585522833!2d-105.00686368420314!3d39.75975627944689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78eb9563ffeb%3A0xba5c63f5f8b1f9bb!2s1850+Platte+St%2C+Denver%2C+CO+80202!5e0!3m2!1sen!2sus!4v1545159444446',
            user_id: 2,
            seats_avalible: 3,
            seat_price: 10.00,
            start_time: 0600,
            end_time: 1800
        }, 
        {
            location_id: 3,
            meetup_location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.30580573098!2d-105.00693008420318!3d39.755241879447546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78c1c2f7fb67%3A0x6430424527b77684!2sLittle+Raven+St%2C+Denver%2C+CO+80202!5e0!3m2!1sen!2sus!4v1545159578741',
            user_id: 3,
            seats_avalible: 2,
            seat_price: 15.00,
            start_time: 0600,
            end_time: 1800
        },
        {
            location_id: 4,
            meetup_location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.2615310268948!2d-105.0027132842032!3d39.756236079447376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78c27c10a88d%3A0xc5383fa16a7f63e8!2sChestnut+Pl%2C+Denver%2C+CO+80202!5e0!3m2!1sen!2sus!4v1545159633382',
            user_id: 4,
            seats_avalible: 1,
            seat_price: 20.00,
            start_time: 0600,
            end_time: 1800
        }
      ]);
    });
};
