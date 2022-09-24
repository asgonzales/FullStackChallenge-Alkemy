const { Router } = require('express');

const { registerUser, loginUser, signOutUser } = require('./controllers/userController.js');





const userRoutes = Router();

userRoutes.post('/signup', registerUser)

userRoutes.post('/signin', loginUser)

userRoutes.put('/signout', signOutUser)






module.exports = { userRoutes }