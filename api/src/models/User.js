const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        isActive: {
            type: DataTypes.ENUM('true', 'false'),
            defaultValue: 'true'
        }
    }, {
        timestamps: false
    })
}