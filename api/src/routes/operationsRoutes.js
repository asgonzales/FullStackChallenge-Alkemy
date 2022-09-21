const { Router } = require('express');

const { createOperation, updateOperation, getAllOperation } = require('./controllers/operationController.js');






const operationRoutes = Router()

operationRoutes.get('/', getAllOperation)

operationRoutes.post('/', createOperation)

operationRoutes.put('/', updateOperation)


module.exports = {
    operationRoutes
}