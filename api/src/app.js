const express = require('express');
const morgan = require('morgan')
const { routes } = require('./routes/index.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { CORS_ORIGIN } = process.env




const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(cors({
    origin: `${CORS_ORIGIN}`,
    credentials: true
}));
server.use(cookieParser());
server.use('/', routes);


module.exports = server;