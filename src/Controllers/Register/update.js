const {returnSuccessInfo} = require('../../functions/returnSuccessInfo')
const {returnError} = require('../../functions/returnError')
const { response } = require('express')


const UpdateUser = (req, res = response) => {
    try {
        res.status(200).json(returnSuccessInfo('update user', {user: 1}))
    } catch (e) {
        res.status(500).json(returnError('update user', e))
    }
}

module.exports = {
    UpdateUser
}
