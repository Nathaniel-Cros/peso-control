const { response } = require('express')

const { Users } = require('../../Models/users')

const { returnError, returnSuccessInfo} = require('../../functions')


const GetAllUsers = async (req, res = response) => {
    try {
        const users = await Users.findAll()
        res.status(200).json(returnSuccessInfo('get all users', users))
    } catch (e) {
        console.error("Error in server")
        res.status(500).json(returnError('get all users', e))
    }
}

module.exports = {
    GetAllUsers
}
