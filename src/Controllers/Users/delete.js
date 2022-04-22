//const {returnSuccessInfo} = require('../../functions/returnSuccessInfo')
const {returnError} = require('../../functions/returnError')
const { response, request } = require('express')
const {Users} = require("../../Models/users");


const DeleteUser = async (req = request, res = response) => {
    try {
        const uid = req.uid

        const userFind = await Users.findOne({
            where: {
                id: uid
            }
        })

        if( userFind ) {
            await Users.destroy({
                where: {
                    id: uid
                },
                force: true
            })
        }

        return res.status(204).json({})
    } catch (e) {
        return res.status(500).json(returnError('delete user', e))
    }
}

module.exports = {
    DeleteUser
}
