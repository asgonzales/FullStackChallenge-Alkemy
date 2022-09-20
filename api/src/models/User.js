const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    })
}