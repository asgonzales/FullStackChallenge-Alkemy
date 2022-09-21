const { Sequelize } = require('sequelize');
require('dotenv').config();
const { DB_USER, DB_PASS, DB_HOST } = process.env;
const user = require('./models/User.js');
const operation = require('./models/Operation.js');
const category = require('./models/Category.js');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/budget`, {
    logging: false,
    native: false
})

//Conecto los modelos con la bd
user(sequelize);
operation(sequelize);
category(sequelize);

//Defino las relaciones entre los modelos
const { User, Operation, Category } = sequelize.models

Operation.hasOne(User, {foreignKey: 'id'})
User.belongsTo(Operation, {foreignKey: 'id'})

Operation.hasOne(Category, {foreignKey: 'id'})
Category.belongsTo(Operation, {foreignKey: 'id'})



module.exports = {
    ...sequelize.models,
    conn: sequelize
}