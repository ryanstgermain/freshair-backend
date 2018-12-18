
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          userName: 'WReX',
          firstName: 'Jess',
          lastName: 'Markgraf',
          Age: 34,
          vehicle: 1,
          trips: 1
        },
        {
          userName: 'NewCarSmell',
          firstName: 'Josh',
          lastName: 'Scala',
          Age: 24,
          vehicle: 2,
          trips: 2
        },
        {
          userName: 'EssssGetit',
          firstName: 'Ryan',
          lastName: 'StGermain',
          Age: 20,
          vehicle: 3,
          trips: 3
        },
        {
          userName: 'ThatTallDude',
          firstName: 'Trey',
          lastName: 'Young',
          Age: 29,
          vehicle: 4,
          trips: 4
        }
      ]);
    });
};
