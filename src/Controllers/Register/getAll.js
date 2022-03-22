const {returnSuccessInfo} = require('../../functions/returnSuccessInfo')
const {returnError} = require('../../functions/returnError')
const { response } = require('express')


const GetAllUsers = (req, res = response) => {
    try {
        res.status(200).json(returnSuccessInfo('get all users', [{user: 1},{user: 2}]))
    } catch (e) {
        console.error("Error in server")
        res.status(500).json(returnError('get all users', e))
    }
}

module.exports = {
    GetAllUsers
}
