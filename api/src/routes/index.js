const { Router } = require('express');
const { operationRoutes } = require('./operationsRoutes.js');
const { userRoutes } = require('./userRoutes.js');
const { categoryRoutes } = require('./categoryRoutes.js');






const routes = Router();

routes.use('/operation', operationRoutes)
routes.use('/user', userRoutes)
routes.use('/category', categoryRoutes)


module.exports = { routes }