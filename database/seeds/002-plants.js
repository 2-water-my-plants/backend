
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
          nickname: 'Fernie',
          image: "https://www.ourhouseplants.com/imgs-content/large_bird_nest_fern.jpg",
          dateLastWatered: "yesterday",
          notificationTime: "9 am",
          notificationEnabled: false
        },

        {
          name: 'bamboo',
          species: 'Dracaena braunii',
          h2oFrequency: 'twice a week',
          nickname: 'Panda food',
          image: "https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1546919669/vendor/4366/catalog/product/2/0/20161117031919_file_582d21b7890a3_2.jpg",
          dateLastWatered: "Monday",
          notificationTime: "12 pm",
          notificationEnabled: false
        },

        {
          name: 'Spider Ivy',
          species: 'perennial flowering',
          h2oFrequency: 'daily',
          nickname: 'Spidey',
          image: "https://5.imimg.com/data5/ZP/WL/CY/SELLER-91354607/spider-plant-jpg-500x500.jpg",
          dateLastWatered: "Saturday",
          notificationTime: "4 pm",
          notificationEnabled: "false"
        }
      ]);
    });
};
