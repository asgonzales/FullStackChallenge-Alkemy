const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Category', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        active: {
            type: DataTypes.ENUM('true', 'false')
        }
    }, {
        timestamps: false
    })
}