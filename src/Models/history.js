const { DataTypes } = require('sequelize')
const { db } = require('../db/connection')


const History = db.define('users', {
    userId: {
        type: DataTypes.INTEGER,
    },
    weight: {
        type: DataTypes.DOUBLE,
    },
    hasCalories: {
        type: DataTypes.TINYINT,
    },
    calories: {
        type: DataTypes.DOUBLE,
    },
    hasWater: {
        type: DataTypes.TINYINT,
    },
    litersWater: {
        type: DataTypes.DOUBLE,
    },
})

module.exports = {
    History
}
