const { User } = require('../../db.js');
const jwt = require('jsonwebtoken');
const { KEY_JWT } = process.env;






const registerUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const exist = await User.findOne({where: {email: email}})
        if(exist) return res.status(400).json({error: 'User already exist'})
    
        const userCreated = await User.create({email, password})
    
        return res.status(200).json(userCreated)

    } catch(err) {
        return res.status(404).json({error: err.message})
    }

}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({where: {email: email}})
        if(!user) return res.status(400).json({error: 'The user does not exist'})
        
        //Crear Token
        const token = jwt.sign({pass: user.id}, KEY_JWT, {expiresIn: '1h'})
        if(user.password === password) return res.status(200).json({ token: token})
        else return res.status(400).json({error: 'Incorrect password'})


    } catch(err) {
        return res.status(400).json({error: err.message})
    }
}



module.exports = {
    registerUser,
    loginUser
}