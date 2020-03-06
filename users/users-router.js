const router = require('express').Router();
const Users = require('./users-model.js');

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
        res.json(users);
        })
        .catch(err => res.send(err));
});

//GET user by ID
router.get('/:id', (req,res) => {
    const id = req.params.id;

    if (!id) {
        res.status(404).json({message: 'Invalid ID'})
    } else {
        Users.findById(id)
            .then(user => {
                res.status(201).json(user)
            })
            .catch(error => {
                res.status(500).json({message: 'Invalid user information'})
            })
    }
});

//Update user phoneNumber and password
router.put('/:id', (req, res) => {
  
    const { id } = req.params;
    const changes = req.body;
  
    Users.findById(id)
      .then(user => {
        if (user) {
          Users.update(id, changes)
            .then(updatedUser => {
              res.status(200).json(updatedUser);
            });
        } else {
          res.status(404).json({ message: 'Could not find user with the given id'});
        }
      })
      .catch(err => {
        res.status(500).json({ 
          message: 'Failed to update user information',
        });
      })
  })
  
//Delete user 
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
      res.status(404).json({ message: "The user with the specified ID does not exist." })
    }
    Users.remove(id)
     .then(user => {
       res.json(user);
     })
      .catch(err => {
        res.status(500).json({ message: 'The user could not be removed' });
      })
  });
  



module.exports = router;