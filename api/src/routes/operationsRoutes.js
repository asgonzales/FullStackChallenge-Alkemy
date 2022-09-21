const { Router } = require('express');

const { createOperation, updateOperation, getAllOperation, getByType } = require('./controllers/operationController.js');






const operationRoutes = Router()

operationRoutes.get('/', getAllOperation)

operationRoutes.post('/', createOperation)

operationRoutes.put('/', updateOperation)

operationRoutes.get('/type/:type', getByType)


module.exports = {
    operationRoutes
}