const { DataTypes } = require('sequelize')
const { db } = require('../Db/connection')


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
        type: DataTypes.STRING,
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
