
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_reviews').insert([
        {
          rating: 3,
          user_review: "blah, blah, blah, This dude's a snowhead",
          vehicle_review: "His auto-mo-bile is a piece of crap, he wants to live a life like that...",
          user_id: 2,
          reviewer_id: 1
        },
        {
          rating: 3,
          user_review: "blah, blah, blah, This dude's a snowhead",
          vehicle_review: "His auto-mo-bile is a piece of crap, he wants to live a life like that...",
          user_id: 2,
          reviewer_id: 4
        },
        {
          rating: 3,
          user_review: "blah, blah, blah, This dude's a snowhead",
          vehicle_review: "His auto-mo-bile is a piece of crap, he wants to live a life like that...",
          user_id: 2,
          reviewer_id: 3
        }
      ])
    })
}