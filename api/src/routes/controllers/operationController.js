const { Operation, User, Category } = require('../../db.js');
const jwt = require('jsonwebtoken');
const { KEY_JWT } = process.env;
const { Op, where } = require('sequelize')





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
                ...whereCond.mount,
                [Op.gt]: minMount
            }
        }
        if(!!maxMount) whereCond = {
            ...whereCond,
            mount: {
                ...whereCond.mount,
                [Op.lt]: maxMount
            }
        }
        if(!!minDate) whereCond = {
            ...whereCond,
            date: {
                ...whereCond.date,
                [Op.gt]: minDate
            }
        }
        if(!!maxDate) whereCond = {
            ...whereCond,
            date: {
                ...whereCond.date,
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

const getStatistics = async (req, res) => {
    const { minDate, maxDate, type, categoryId } = req.query
    const { token } = req.cookies

    try {
        // let max = 0
        // let min = 0
        // let prom = 0
        let categoryStats = {}
        
        let whereDataCond = {
            userId: jwt.verify(token, KEY_JWT).id,
            isActive: 'true'
        }

        let whereCategoriesCond = {}

        if(!!type) {
            whereDataCond = {
                ...whereDataCond,
                type: type
            }
            whereCategoriesCond = {
                ...whereCategoriesCond,
                type: type
            }
        }
        if(!!categoryId) {
            whereDataCond = {
                ...whereDataCond,
                categoryId: categoryId
            }
            whereCategoriesCond = {
                ...whereCategoriesCond,
                id: categoryId
            }
        } 
        if(!!minDate) whereDataCond = {
            ...whereDataCond,
            date: {
                ...whereDataCond.date,
                [Op.gt]: minDate
            }
        }
        if(!!maxDate) whereDataCond = {
            ...whereDataCond,
            date: {
                ...whereDataCond.date,
                [Op.lt]: maxDate
            }
        }
        
        //Obtengo los nombres de todas las categorías
        const categoriesNames = await Category.findAll({
            attributes: ['name'],
            where: whereCategoriesCond
        })
        
        //Armo un objeto con los nombres de las categorías como propiedades
        categoriesNames.forEach(val => {
            categoryStats[val.name] = {
                // amount: 0,
                max: 0,
                min: 0,
                acum: 0,
                cant: 0,
                prom: 0
            }
        })


        const data = await Operation.findAll({
            where: whereDataCond,
            include: {
                model: Category
            }
        })
        // min = data[0].mount
        // console.log('DATA', data)
        data.forEach(d => {
            console.log(d.Category.name, categoryStats[d.Category.name])
            categoryStats[d.Category.name] = {
                ...categoryStats[d.Category.name],
                // amount: categoryStats[d.Category.name].amount + 1,
                max: d.mount > categoryStats[d.Category.name].max ? d.mount : categoryStats[d.Category.name].max,
                min: d.mount < (categoryStats[d.Category.name].min || 9999999) ? d.mount : categoryStats[d.Category.name].min,
                acum: categoryStats[d.Category.name].acum + d.mount,
                cant: categoryStats[d.Category.name].cant + 1,
            }
            // max = d.mount > max ? d.mount : max
            // min = d.mount < min ? d.mount : min
            // prom += d.mount
        })
        categoryStats = Object.entries(categoryStats)
        for (let i = 0; i < categoryStats.length; i++) {
            categoryStats[i][1].prom = categoryStats[i][1].acum / categoryStats[i][1].cant
        }
        
        return res.status(200).json(categoryStats)
        // const statistics = {
        //     amount: data.length,
        //     max,
        //     min,
        //     prom: prom/data.length
        // }

    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
}

module.exports = {
    createOperation,
    updateOperation,
    getAllOperation,
    getLastRecords,
    getTotal,
    deleteOperation,
    getByFilter,
    getStatistics
}