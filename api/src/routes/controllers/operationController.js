const { Operation, User, Category } = require('../../db.js');
const jwt = require('jsonwebtoken');
const { KEY_JWT } = process.env;






const createOperation = async (req, res) => {

    const { token } = req.headers
    let oper = { concept, mount, date, type, categoryId } = req.body;
    oper = {
        ...oper,
        userId: jwt.verify(token, KEY_JWT).id
    }
    
    try {

        await Operation.create(oper)
        return res.status(200).json({msg: 'Operation created'})

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
        
        const allOperations = await Operation.findAll({
            where: { isActive: 'true' },
            include: { model: Category }
        })

        return res.json(allOperations)

    } catch (err) {
        return res.status(400).json({error: err.message})
    }

}

const getByType = async (req, res) => {
    const { type } = req.params
    try {
        const operations = await Operation.findAll({
            where: { type: type, isActive: 'true' },
            include: { model: Category }
        })
        return res.json(operations)
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

const getByCategory = async (req, res) => {
    const { categoryId } = req.params
    try {
        const operations = await Operation.findAll({
            where: { categoryId: categoryId, isActive: 'true' },
            include: { model: Category }
        })
        return res.json(operations)
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

const getLastRecords = async (req, res) => {
    const { token } = req.headers
    try {
        const operations = await Operation.findAll({
            limit: 10,
            where: { isActive: 'true', userId: jwt.verify(token, KEY_JWT).id },
            include: { model: Category },
            order: [['id', 'desc']]
        })
        return res.json(operations)
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

const getTotal = async (req, res) => {
    try {
        const income = await Operation.findAll({ where: { type: 'ingreso', isActive: 'true' } })
        const expenses = await Operation.findAll({ where: { type: 'egreso', isActive: 'true' } })

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

const deleteOperation = async (req, res) => {
    const { operationId } = req.body

    try {
        await Operation.update({ isActive: 'false'}, { where: { id: operationId } })
        const delOperation = await Operation.findOne({where: { id: operationId } })
        return res.json(delOperation)
    } catch (err) {
        return res.status({ error: err.message })
    }
}

module.exports = {
    createOperation,
    updateOperation,
    getAllOperation,
    getByType,
    getByCategory,
    getLastRecords,
    getTotal,
    deleteOperation
}