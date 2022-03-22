const { DataTypes } = require('sequelize')
const { db } = require('../db/connection')


const Users = db.define('users', {
    username: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    birthday: {
        type: DataTypes.DATE,
    },
    gender: {
        type: DataTypes.STRING,
    },
    height: {
        type: DataTypes.DOUBLE,
    },
})

module.exports = {
    Users
}
