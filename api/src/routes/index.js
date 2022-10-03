require('dotenv').config();
const { Router } = require('express');
const { operationRoutes } = require('./operationsRoutes.js');
const { userRoutes } = require('./userRoutes.js');
const { categoryRoutes } = require('./categoryRoutes.js');
const cors = require('cors');
const { CORS_ORIGIN } = process.env;






const routes = Router();
routes.options('*', cors({
    origin: `${CORS_ORIGIN}`,
    methods: 'GET, PUT, POST, PATCH, DELETE, OPTIONS',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, token',
    credentials: true
}))

routes.use('/operation', operationRoutes)
routes.use('/user', userRoutes)
routes.use('/category', categoryRoutes)


module.exports = { routes }