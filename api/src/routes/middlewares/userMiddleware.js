const jwt = require('jsonwebtoken');
const { KEY_JWT } = process.env;

const verify = (req, res, next) => {
    const { token } = req.cookies
    if(!token) return res.status(400).json({ error: 'Acceso Denegado'})
    try {
        const prueba = jwt.verify(token, KEY_JWT)
        let newToken = {}

        // console.log( 'PRUEBA', jwt.verify(token, KEY_JWT))

        // if(!prueba) return res.status(400).json({ error: 'Su sesión expiró', session: false})


        newToken = jwt.sign({ id: prueba.id }, KEY_JWT, { expiresIn: '10s'})
        res.cookie('token', newToken, { sameSite: 'none', secure: true})
        next()
    } catch (err) {
        return res.status(400).json({ error: 'Su sesión expiró', sessionEnd: true })
    }
}

module.exports = verify;