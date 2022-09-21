const { Router } = require('express');

const { registerUser, loginUser } = require('./controllers/userController.js');





const userRoutes = Router();

userRoutes.post('/signup', registerUser)

userRoutes.post('/signin', loginUser)






module.exports = { userRoutes }