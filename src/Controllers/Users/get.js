const {returnSuccessInfo} = require('../../functions/returnSuccessInfo')
const {returnError} = require('../../functions/returnError')
const { response } = require('express')

const GetUser = (req, res = response) => {
    try {
        res.status(200).json(returnSuccessInfo('get user', {user: 1}))
    } catch (e) {
        res.status(500).json(returnError('get user', e))
    }
}

module.exports = {
    GetUser
}
