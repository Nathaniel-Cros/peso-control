const {returnSuccessInfo} = require('../../functions/returnSuccessInfo')
const {returnError} = require('../../functions/returnError')
const { response } = require('express')


const DeleteUser = (req, res = response) => {
    try {
        res.status(200).json(returnSuccessInfo('delte user', {user: 1}))
    } catch (e) {
        res.status(500).json(returnError('delete user', e))
    }
}

module.exports = {
    DeleteUser
}
