const { Router } = require('express');

const { registerUser, loginUser, signGoogle, signOutUser } = require('./controllers/userController.js');





const userRoutes = Router();

userRoutes.post('/signup', registerUser)

userRoutes.post('/signin', loginUser)

userRoutes.post('/signGoogle', signGoogle)

userRoutes.put('/signout', signOutUser)






module.exports = { userRoutes }