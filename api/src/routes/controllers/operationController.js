const { Operation } = require('../../db.js');








const createOperation = async (req, res) => {

    const oper = { concept, mount, date, type, userId, categoryId } = req.body;

    res.json(oper)
}

module.exports = {
    createOperation
}