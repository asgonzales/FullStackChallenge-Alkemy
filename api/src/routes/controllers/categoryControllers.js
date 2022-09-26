const { Category } = require('../../db.js');








const createCategory = async (req, res) => {

    const { name } = req.body;

    try {
        const newCategory = await Category.create({name})
        return res.json(newCategory)
    } catch( err ) {
        return res.status(400).json({error: err.message})
    }

}

const getCategories = async (req, res) => {

    try {

        const categories = await Category.findAll()
        return res.json(categories)

    } catch( err ) {

        return res.status(400).json({error: err.message})

    }
}

module.exports = {
    createCategory,
    getCategories
}