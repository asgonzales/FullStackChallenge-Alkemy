const { Router } = require('express');

const { createOperation } = require('./controllers/operationController.js');






const operationRoutes = Router()

operationRoutes.post('/', createOperation)


module.exports = {
    operationRoutes
}