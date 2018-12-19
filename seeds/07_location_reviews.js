
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('location_reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('location_reviews').insert([
        {
          rating: 5,
          location_review: "these slopes totally lack gnar, my dude!",
          location_id: 2,
          reviewer_id: 3
        },
        {
          rating: 1,
          location_review: "these slopes totally lack gnar, my dude!",
          location_id: 2,
          reviewer_id: 2
        },
        {
          rating: 3,
          location_review: "these slopes totally lack gnar, my dude!",
          location_id: 2,
          reviewer_id: 1
        },
        {
          rating: 4,
          location_review: "these slopes totally lack gnar, my dude!",
          location_id: 2,
          reviewer_id: 4
        },
        {
          rating: 2,
          location_review: "these slopes totally lack gnar, my dude!",
          location_id: 1,
          reviewer_id: 2
        },
        {
          rating: 1,
          location_review: "these slopes totally lack gnar, my dude!",
          location_id: 3,
          reviewer_id: 2
        }
      ])
    })
}