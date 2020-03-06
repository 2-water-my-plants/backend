const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove,
    update
};

function find() {
    return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function findById(id) {
    return db('users')
    .where({ id })
    .first();
}

function remove(id) {
    return db('users')
      .where({ id })
      .del();
  }

async function update(id, user) {
    await db('users')
    .where('id')
    .update(user)
    return findById(id);
}


