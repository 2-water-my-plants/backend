const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRouter = require('./auth/auth-router.js')
const usersRoute = require('./users/users-router');
const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRoute);

server.get('/', (req, res) => {
    res.send("Server is talking")
})

module.exports = server;