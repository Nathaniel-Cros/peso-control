const { response } = require('express')

const { returnError, returnSuccessInfo } = require('../../functions')
const {History} = require('../../Models/history')

const GetAllHistories = async (req, res = response) => {
    try {
        const { uid:userId } = req
        const Histories = await History.findAll({
            where: {
                userId
            }
        })

        res.status(200).json(returnSuccessInfo('get all Historys', {Histories}))
    } catch (e) {
        console.error("Error in server")
        res.status(500).json(returnError('get all Historys', e))
    }
}

module.exports = {
    GetAllHistories
}
