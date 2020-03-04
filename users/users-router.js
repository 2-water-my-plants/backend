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
})



module.exports = router;