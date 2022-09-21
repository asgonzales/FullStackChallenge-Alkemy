const { Router } = require('express');
const { operationRoutes } = require('./operationsRoutes.js');
const { userRoutes } = require('./userRoutes.js')







const routes = Router();

routes.use('/operation', operationRoutes)
routes.use('/user', userRoutes)


module.exports = { routes }