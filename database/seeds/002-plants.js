
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {"name": "Lilies"},
        {"name": "cactus"},
        {"name": "Ivy"}
      ]);
    });
};
