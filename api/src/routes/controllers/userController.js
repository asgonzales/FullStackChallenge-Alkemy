const { User } = require('../../db.js');
const jwt = require('jsonwebtoken');
const { KEY_JWT } = process.env;
const bcrypt = require('bcrypt');





const registerUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const exist = await User.findOne({where: {email: email}})
        if(exist) return res.status(400).json({error: 'User already exist'})
        
        const passCrypt = bcrypt.hashSync(password, 10);

        await User.create({email, password: passCrypt})
    
        return res.status(200).json({register: true})

    } catch(err) {
        return res.status(404).json({error: err.message})
    }

}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({where: {email: email}})
        if(!user) return res.status(400).json({error: 'The user does not exist'})

        if(bcrypt.compareSync(password, user.password)) {
            //Crear Token
            const token = jwt.sign({id: user.id}, KEY_JWT, {expiresIn: '3h'})
            res.cookie('token', token, { SameSite: 'None', secure: true }) //act
            return res.status(200).json({ token: token})
        }
        else return res.status(400).json({error: 'Incorrect password'})

    } catch(err) {
        return res.status(400).json({error: err.message})
    }
}
const signOutUser = async (req, res) => {
    try {
        res.cookie('token', 0, { expires: new Date(0)})
        return res.status(200).json({msg: 1})
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}



module.exports = {
    registerUser,
    loginUser,
    signOutUser
}