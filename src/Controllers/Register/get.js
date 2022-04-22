const { response } = require('express')

const { returnError, returnSuccessInfo } = require('../../functions')
const {History} = require('../../Models/history')

const GetHistory = async (req, res = response) => {
    try {
        const {id} = req.params

        const history = await History.findByPk(id)

        if( !history ) {
            return res.status(400).json(returnError('get History', 'History not found'))
        }

        res.status(200).json(returnSuccessInfo('get History', {history}))
    } catch (e) {
        res.status(500).json(returnError('get History', e))
    }
}

module.exports = {
    GetHistory
}
