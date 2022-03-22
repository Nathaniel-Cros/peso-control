const {returnSuccessInfo} = require('../../functions/returnSuccessInfo')
const {returnError} = require('../../functions/returnError')
const { response } = require('express')


const AddUser = (req, res = response) => {
    try {
        const { username, name, lastname, email, password, birthDate, gender, height } = req.body
        res.status(201).json(returnSuccessInfo('new user', {user: 1}))
    } catch (e) {
        res.status(500).json(returnError('new user', e))
    }
}

module.exports = {
    AddUser
}
