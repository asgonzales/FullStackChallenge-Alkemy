const { Router } = require('express');

const { 
    createOperation,
    updateOperation,
    getAllOperation,
    getByType,
    getByCategory,
    getLastRecords,
    getTotal 
} = require('./controllers/operationController.js');






const operationRoutes = Router()

operationRoutes.get('/', getAllOperation)

operationRoutes.post('/', createOperation)

operationRoutes.put('/', updateOperation)

operationRoutes.get('/type/:type', getByType)

operationRoutes.get('/category/:categoryId', getByCategory)

operationRoutes.get('/lastrecords', getLastRecords)

operationRoutes.get('/total', getTotal)

module.exports = {
    operationRoutes
}