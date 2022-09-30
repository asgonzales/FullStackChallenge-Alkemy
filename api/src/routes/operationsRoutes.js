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
const verify = require('./middlewares/userMiddleware.js');






const operationRoutes = Router()

operationRoutes.get('/',verify, getAllOperation)

operationRoutes.post('/', verify, createOperation)

operationRoutes.put('/', verify, updateOperation)

operationRoutes.delete('/', verify, deleteOperation)

operationRoutes.get('/filter', verify, getByFilter)

operationRoutes.get('/lastrecords', verify, getLastRecords)

operationRoutes.get('/total', verify, getTotal)


module.exports = {
    operationRoutes
}