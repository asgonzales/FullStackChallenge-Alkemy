const { Operation, User, Category } = require('../../db.js');
const jwt = require('jsonwebtoken');
const { KEY_JWT } = process.env;
const { Op } = require('sequelize')





const createOperation = async (req, res) => {

    const { token } = req.cookies
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
        return res.status(200).json(newOperation)
    } catch (err) {
        return res.status(400).json({error: err.message})
    }
}

const getAllOperation = async (req, res) => {
    const { token } = req.cookies

    try {
        
        const allOperations = await Operation.findAll({
            where: { isActive: 'true', userId: jwt.verify(token, KEY_JWT).id },
            include: { model: Category }
        })

        return res.status(200).json(allOperations)

    } catch (err) {
        return res.status(400).json({error: err.message})
    }

}

const getByFilter = async (req, res) => {
    const { type, categoryId, concept, minMount, maxMount, minDate, maxDate } = req.query
    const { token } = req.cookies
    let whereCond = {}

    try {

        if(!!type) whereCond = { ...whereCond, type: type}
        if(!!categoryId) whereCond = { ...whereCond, categoryId: categoryId}
        if(!!concept) whereCond = {
            ...whereCond,
            concept : {
                [Op.iLike]: `%${concept}%`
            }
        }
        if(!!minMount) whereCond = {
            ...whereCond,
            mount: {
                [Op.gt]: minMount
            }
        }
        if(!!maxMount) whereCond = {
            ...whereCond,
            mount: {
                [Op.lt]: maxMount
            }
        }
        if(!!minDate) whereCond = {
            ...whereCond,
            date: {
                [Op.gt]: minDate
            }
        }
        if(!!maxDate) whereCond = {
            ...whereCond,
            date: {
                [Op.lt]: maxDate
            }
        }
        
        const operations = await Operation.findAll({
            where: {
                ...whereCond,
                isActive: 'true',
                userId: jwt.verify(token, KEY_JWT).id
            },
            include: {
                model: Category,
                attributes: ['id', 'name']
            },
            order: [['id', 'desc']],
            attributes: ['id', 'concept', 'mount', 'date', 'type']
        })
        return res.status(200).json(operations)
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

const getLastRecords = async (req, res) => {
    const { token } = req.cookies
    try {
        const operations = await Operation.findAll({
            limit: 10,
            where: { isActive: 'true', userId: jwt.verify(token, KEY_JWT).id },
            include: { model: Category },
            order: [['id', 'desc']]
        })
        return res.status(200).json(operations)
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

const getTotal = async (req, res) => {
    const { token } = req.cookies
    try {
        const income = await Operation.findAll({ where: { type: 'ingreso', isActive: 'true', userId: jwt.verify(token, KEY_JWT).id } })
        const expenses = await Operation.findAll({ where: { type: 'egreso', isActive: 'true', userId: jwt.verify(token, KEY_JWT).id } })

        let totalIncome = 0
        let totalExpenses = 0

        income.forEach(val => totalIncome += val.mount)
        expenses.forEach(val => totalExpenses += val.mount)

        const total = totalIncome - totalExpenses

        return res.status(200).json({ total: total })

    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

const deleteOperation = async (req, res) => {
    const { operationId } = req.body

    try {
        await Operation.update({ isActive: 'false'}, { where: { id: operationId } })
        const delOperation = await Operation.findOne({where: { id: operationId } })
        return res.status(200).json(delOperation)
    } catch (err) {
        return res.status({ error: err.message })
    }
}

module.exports = {
    createOperation,
    updateOperation,
    getAllOperation,
    getLastRecords,
    getTotal,
    deleteOperation,
    getByFilter
}