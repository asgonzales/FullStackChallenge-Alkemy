const express = require('express');
const morgan = require('morgan')
const { routes } = require('./routes/index.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');





const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
server.use(cookieParser());
server.use('/', routes);


module.exports = server;