
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants')
    .truncate()
    .then(function () {
      return knex('plants').insert([
        {
          name: 'fern',
          species: 'Birds-nest fern',
          h2oFrequency: 'weekly',
          nickname: 'Fernie'
        },

        {
          name: 'bamboo',
          species: 'Dracaena braunii',
          h2oFrequency: 'twice a week',
          nickname: 'Panda food'
        },

        {
          name: 'Spider Ivy',
          species: 'perennial flowering',
          h2oFrequency: 'daily',
          nickname: 'Spidey'
        }
      ]);
    });
};
