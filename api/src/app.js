require('dotenv').config();
const express = require('express');
const morgan = require('morgan')
const { routes } = require('./routes/index.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { CORS_ORIGIN } = process.env;




const server = express();

// server.use(cors())
// server.use(cors({
//     origin: CORS_ORIGIN,
//     methods: 'GET, PUT, POST, PATCH, DELETE, OPTIONS',
//     allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, token, application/json, text/plain, */*',
//     credentials: true
// }));

server.use(morgan('dev'));
server.use(express.json());
server.use(cookieParser());

server.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', CORS_ORIGIN)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
})

server.use('/', routes);


module.exports = server;