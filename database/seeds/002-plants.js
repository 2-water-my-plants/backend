
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {name: "roses"},
        {name: "ivy"},
        {name: "Lillies"}
      ]);
    });
};
