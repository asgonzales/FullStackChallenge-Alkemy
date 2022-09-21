const { Router } = require('express');

const { createOperation, updateOperation, getAllOperation, getByType, getByCategory, getLastRecords } = require('./controllers/operationController.js');






const operationRoutes = Router()

operationRoutes.get('/', getAllOperation)

operationRoutes.post('/', createOperation)

operationRoutes.put('/', updateOperation)

operationRoutes.get('/type/:type', getByType)

operationRoutes.get('/category/:categoryId', getByCategory)

operationRoutes.get('/lastrecords', getLastRecords)

module.exports = {
    operationRoutes
}