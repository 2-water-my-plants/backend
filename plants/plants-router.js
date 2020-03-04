const router = require('express').Router();
const Plants = require('./plants-model.js');

router.get('/', (req, res) => {
    Plants.findPlant()
        .then(plants => {
        res.json(plants);
        })
        .catch(err => res.send(err));
});

router.get('/:id', (req,res) => {
    const id = req.params.id;

    if (!id) {
        res.status(404).json({message: 'Invalid Plant ID'})
    } else {
        Plants.findByPlantId(id)
            .then(plant => {
                res.status(201).json(plant)
            })
            .catch(error => {
                res.status(500).json({message: 'Invalid Plant information'})
            })
    }
})



module.exports = router;