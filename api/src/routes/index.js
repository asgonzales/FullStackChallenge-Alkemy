const { Router } = require('express');
const { operationsRoutes } = require('./operationsRoutes.js');
const { userRoutes } = require('./userRoutes.js')







const routes = Router();

// routes.use('/operation', operationsRoutes)
routes.use('/user', userRoutes)


module.exports = { routes }