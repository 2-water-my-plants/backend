const db = require('../database/dbConfig.js');

module.exports = {
    addPlant,
    findPlant,
    findByPlant,
    findByPlantId,
};

function findPlant() {
    return db('plants').select('id', 'name');
}

function findByPlant(filter) {
    return db('plants').where(filter);
}

async function addPlant(plant) {
    const [id] = await db('plants').insert(plant);

    return findById(id);
}

function findByPlantId(id) {
    return db('plants')
    .where({ id })
    .first();
}
