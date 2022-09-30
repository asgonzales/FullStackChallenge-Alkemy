const { Category } = require('../../db.js');








const createCategory = async (req, res) => {

    const { name } = req.body;

    try {
        const newCategory = await Category.create({name})
        return res.status(200).json(newCategory)
    } catch( err ) {
        return res.status(400).json({error: err.message})
    }

}

const getCategories = async (req, res) => {
    const { type } = req.query
    try {
        const categories = await Category.findAll({
            where: {
                type: type
            }
        })
        return res.status(200).json(categories)

    } catch( err ) {

        return res.status(400).json({error: err.message})

    }
}

module.exports = {
    createCategory,
    getCategories
}