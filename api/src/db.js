const { Sequelize } = require('sequelize');
require('dotenv').config();
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
const user = require('./models/User.js');
const operation = require('./models/Operation.js');
const category = require('./models/Category.js');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
    native: false
})

//Conecto los modelos con la bd
user(sequelize);
operation(sequelize);
category(sequelize);

//Defino las relaciones entre los modelos
const { User, Operation, Category } = sequelize.models

User.hasMany(Operation, {foreignKey: 'userId', as: 'operationId'})
Operation.belongsTo(User, {foreignKey: 'userId'})

Category.hasMany(Operation, {foreignKey: 'categoryId', as: 'operationId'})
Operation.belongsTo(Category, {foreignKey: 'categoryId'})



module.exports = {
    ...sequelize.models,
    conn: sequelize
}