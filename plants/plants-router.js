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
});

//Update user phoneNumber and password
router.put('/:id', (req, res) => {
  
    const { id } = req.params;
    const changes = req.body;
  
    Plants.findByPlantId(id)
      .then(update => {
        if (update) {
          Plants.updatePlant(id, changes)
            .then(plant => {
              res.status(200).json(plant);
            });
        } else {
          res.status(404).json({ message: 'Could not find plant with the given id'});
        }
      })
      .catch(err => {
        res.status(500).json({ 
          message: 'Failed to update plant information',
        });
      })
  })
  
//Delete user 
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
      res.status(404).json({ message: "The plant with the specified ID does not exist." })
    }
    Plants.removePlant(id)
     .then(plant => {
       res.json(plant);
     })
      .catch(err => {
        res.status(500).json({ message: 'The plant could not be removed' });
      })
  });




module.exports = router;