const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Category', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
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