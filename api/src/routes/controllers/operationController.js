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

const getAllOperation = async (req, res) => {

    try {
        
        const allOperations = await Operation.findAll()

        return res.json(allOperations)

    } catch (err) {
        return res.status(400).json({error: err.message})
    }

}

const getByType = async (req, res) => {
    const { type } = req.params
    try {
        const operations = await Operation.findAll({ where: { type: type } })
        return res.json(operations)
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

const getByCategory = async (req, res) => {
    const { categoryId } = req.params
    try {
        const operations = await Operation.findAll({ where: { categoryId: categoryId } })
        return res.json(operations)
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

const getLastRecords = async (req, res) => {
    try {
        const operations = await Operation.findAll({
            limit: 10,
            order: [['id', 'desc']]
        })
        return res.json(operations)
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

const getTotal = async (req, res) => {
    try {
        const income = await Operation.findAll({ where: { type: 'ingreso' } })
        const expenses = await Operation.findAll({ where: { type: 'egreso' } })

        let totalIncome = 0
        let totalExpenses = 0

        income.forEach(val => totalIncome += val.mount)
        expenses.forEach(val => totalExpenses += val.mount)

        const total = totalIncome - totalExpenses

        return res.json({ total: total })

    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

module.exports = {
    createOperation,
    updateOperation,
    getAllOperation,
    getByType,
    getByCategory,
    getLastRecords,
    getTotal
}