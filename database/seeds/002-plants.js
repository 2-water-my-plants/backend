
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants')
    .truncate()
    .then(function () {
      return knex('plants').insert([
        {
          nickName: 'Fernie',
          species: 'Birds-nest fern',
          h2oFrequency: '7',
          image: "https://www.ourhouseplants.com/imgs-content/large_bird_nest_fern.jpg",
          dateLastWatered: "480",
          notificationTime: "08:30:00",
          notificationEnabled: false,
          userId: 1,
        },

        {
          nickName: 'Panda food',
          species: 'Dracaena braunii',
          h2oFrequency: '6',
          image: "https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1546919669/vendor/4366/catalog/product/2/0/20161117031919_file_582d21b7890a3_2.jpg",
          dateLastWatered: "470",
          notificationTime: "09:00:00",
          notificationEnabled: false
        },

        {
          nickName: 'Spidey',
          species: 'perennial flowering',
          h2oFrequency: '5',
          image: "https://5.imimg.com/data5/ZP/WL/CY/SELLER-91354607/spider-plant-jpg-500x500.jpg",
          dateLastWatered: "460",
          notificationTime: "10:00:00",
          notificationEnabled: "false"
        }
      ]);
    });
};
