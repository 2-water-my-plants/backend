const router = require('express').Router();
const Plants = require('./plants-model.js');

router.get('/', (req, res) => {
    Plants.findPlant()
        .then(plants => {
        res.json(plants);
        })
        .catch(err => res.send(err));
});


module.exports = router;