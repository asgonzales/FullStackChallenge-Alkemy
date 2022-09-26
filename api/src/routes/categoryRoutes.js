const { Router } = require('express');
const { createCategory, getCategories } = require('./controllers/categoryControllers.js');







const categoryRoutes = Router();

categoryRoutes.post('/', createCategory)

categoryRoutes.get('/', getCategories)


module.exports = { 
    categoryRoutes
}