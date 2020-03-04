const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model.js'); 
const Plants = require('../plants/plants-model.js');
const secrets = require('../config/secrets');


//Create New User Account
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); 
    user.password = hash;

    Users.add(user)
        .then(saved => {
        res.status(201).json(saved);
        })
        .catch(error => {
        res.status(500).json({message: 'Not able to create new user'});
        });
    });

//Login Valid User
router.post('/login', (req, res) => {
let { username, password } = req.body;

Users.findBy({ username })
    .first()
    .then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
        req.session.loggedin = true;

        const token = genToken(user);

        res.status(200).json({
        message: `Welcome ${user.username}`,
        token: token
        })
    } else {
        res.status(401).json({ message: 'Invalid Credentials' });
    }
    })
    .catch(error => {
    res.status(500).json(error);
    });
});

//Create new Plant
router.post('/myplants', (req,res) => {
    Plants.addPlant()
        .then(newPlant => {
            res.status(201).json(newPlant);
        })
        .catch(err => {
            res.status(500).json({message: 'Sorry new plant is not added'})
        })
})


function genToken(user) {
    const payload = {
        userid: user.id,
        username: user.username,
        }
        const options = {
        expiresIn: '2wks'
        };
    
    return jwt.sign(payload, secrets.jwtSecret, options);
}


module.exports = router;