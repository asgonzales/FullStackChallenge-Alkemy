const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
    sequelize.define('Operation', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        concept: {
            type: DataTypes.STRING
        },
        mount: {
            type: DataTypes.INTEGER
        },
        date: {
            type: DataTypes.STRING
        },
        type: {
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