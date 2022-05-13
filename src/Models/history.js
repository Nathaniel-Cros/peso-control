const { DataTypes } = require('sequelize')
const { db } = require('../Db/connection')


const History = db.define('history', {
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
    },
    {
        freezeTableName: true
    }
)

module.exports = {
    History
}
