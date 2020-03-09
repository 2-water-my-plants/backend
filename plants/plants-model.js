const db = require('../database/dbConfig.js');

module.exports = {
    addPlant,
    findPlant,
    findByPlant,
    findByPlantId,
    removePlant,
    updatePlant
};

function findPlant() {
    return db('plants').select('id', 'nickName', 'species', 'h2oFrequency', 'image', 'dateLastWatered', 'notificationTime', 'notificationEnabled');
}

function findByPlant(filter) {
    return db('plants').where(filter);
}

async function addPlant(plant) {
    const [id] = await db('plants').insert(plant);

    return findByPlantId(id);
}

function findByPlantId(id) {
    return db('plants')
    .where({ id })
    .first();
}

function removePlant(id) {
    return db('plants')
      .where({ id })
      .del();
  }

function updatePlant(id, plant) {
    db('plants')
    .where('id')
    .update(plant)
    return findByPlantId(id);
}

