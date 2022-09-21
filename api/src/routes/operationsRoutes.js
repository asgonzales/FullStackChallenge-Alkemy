const { Router } = require('express');

const { createOperation, updateOperation } = require('./controllers/operationController.js');






const operationRoutes = Router()

operationRoutes.post('/', createOperation)

operationRoutes.put('/', updateOperation)


module.exports = {
    operationRoutes
}