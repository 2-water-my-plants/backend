
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        { 
          firstName: 'Sam', 
          lastName: 'Mas', 
          username: 'Hobbit1', 
          password: 'password', 
          phoneNumber: '1231231234' 
        },

        { 
          firstName: 'Frodo', 
          lastName: 'Odorf', 
          username: 'Hobbit2', 
          password: 'password', 
          phoneNumber: '5675675678' 
        },

        { 
          firstName: 'Pippin', 
          lastName: 'Nippip', 
          username: 'Hobbit3', 
          password: 'password', 
          phoneNumber: '9019019012' 
        },

        { 
          firstName: 'Merry', 
          lastName: 'Yrrem', 
          username: 'Hobbit4', 
          password: 'password', 
          phoneNumber: '1021021023' 
        },
      ]);
    });
};