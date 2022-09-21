const { Operation, User, Category } = require('../../db.js');








const createOperation = async (req, res) => {

    const oper = { concept, mount, date, type, userId, categoryId } = req.body;

    try {

        const newOperation = await Operation.create(oper)
        return res.json(newOperation)

    } catch (err) {
        return res.status(400).json({error: err.message})
    }
}

const updateOperation = async (req, res) => {
    const newData = { operationId, concept, mount, date, type, categoryId } = req.body;

    try {

        const update = await Operation.update(newData, { where: { id: operationId}})
        const newOperation = await Operation.findOne({
            where: { id: operationId } ,
            include: [{ model: Category }, { model: User }]
        })
        return res.json(newOperation)
    } catch (err) {
        return res.status(400).json({error: err.message})
    }
}
module.exports = {
    createOperation,
    updateOperation
}