const { User } = require('../../db.js');








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



module.exports = {
    registerUser
}