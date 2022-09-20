const { Sequelize } = require('sequelize');
require('dotenv').config();
const { DB_USER, DB_PASS, DB_HOST } = process.env;
const User = require('./models/User.js');
const Operation = require('./models/Operation.js');
const Category = require('./models/Category.js');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/budget`, {
    logging: false,
    native: false
})

User(sequelize);
Operation(sequelize);
Category(sequelize);




module.exports = {
    conn: sequelize
}