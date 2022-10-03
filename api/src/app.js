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
server.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', CORS_ORIGIN)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})
server.use(cookieParser());
server.use('/', routes);


module.exports = server;