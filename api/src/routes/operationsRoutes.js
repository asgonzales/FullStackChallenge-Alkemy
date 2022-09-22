const { Router } = require('express');

const { 
    createOperation,
    updateOperation,
    getAllOperation,
    getLastRecords,
    getTotal,
    deleteOperation,
    getByFilter
} = require('./controllers/operationController.js');






const operationRoutes = Router()

operationRoutes.get('/', getAllOperation)

operationRoutes.post('/', createOperation)

operationRoutes.put('/', updateOperation)

operationRoutes.delete('/', deleteOperation)

operationRoutes.get('/filter', getByFilter)

operationRoutes.get('/lastrecords', getLastRecords)

operationRoutes.get('/total', getTotal)


module.exports = {
    operationRoutes
}