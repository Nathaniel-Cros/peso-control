const { response } = require('express')
const {Users} = require('../../Models/users')

const { returnError, returnSuccessInfo } = require('../../Functions')

const GetUser = async (req, res = response) => {
    try {
        const uid = req.uid

        const userFind = await Users.findOne({
            where: {
                id: uid
            }
        })

        const user = {...userFind?.dataValues}

        delete user.id
        delete user.password

        res.status(200).json(returnSuccessInfo('get user', {user}))
    } catch (e) {
        res.status(500).json(returnError('get user', e))
    }
}

module.exports = {
    GetUser
}
