const { Router } = require('express');

const { registerUser } = require('./controllers/userController.js');





const userRoutes = Router();

userRoutes.post('/signup', registerUser)







module.exports = { userRoutes }