const { Operation } = require('../../db.js');








const createOperation = async (req, res) => {

    const oper = { concept, mount, date, type, userId, categoryId } = req.body;

    try {

        const newOperation = await Operation.create(oper)
        return res.json(newOperation)
    } catch (err) {
        return res.status(400).json({error: err.message})
    }
}

module.exports = {
    createOperation
}