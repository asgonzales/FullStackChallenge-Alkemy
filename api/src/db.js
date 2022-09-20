const { Sequelize } = require('sequelize');
require('dotenv').config();
const { DB_USER, DB_PASS, DB_HOST } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/budget`, {
    logging: false,
    native: false
})






module.exports = {
    conn: sequelize
}