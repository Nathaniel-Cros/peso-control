const {returnSuccessInfo} = require('../../functions/returnSuccessInfo')
const {returnError} = require('../../functions/returnError')
const { response } = require('express')


const AddUser = (req, res = response) => {
    try {
        const body = JSON.parse(req.body)
        console.log(`Body -> ${JSON.stringify(body)}`,)
        res.status(201).json(returnSuccessInfo('new user', {user: 1}))
    } catch (e) {
        res.status(500).json(returnError('new user', e))
    }
}

module.exports = {
    AddUser
}
