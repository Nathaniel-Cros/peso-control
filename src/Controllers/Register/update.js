const { response } = require('express')

const { returnError, returnSuccessInfo } = require('../../functions')
const {History} = require('../../Models/history')


const UpdateHistory = async (req, res = response) => {
    try {
        const {id} = req.params
        const { weight, hasCalories, calories, hasWater, litersWater } = req.body

        const history = await History.findByPk(id)

        if( !history ) {
            return res.status(400).json(returnError('update History', 'History not found'))
        }

        history.weight = weight
        history.hasCalories = hasCalories
        history.calories = calories
        history.hasWater = hasWater
        history.litersWater = litersWater

        await history.save()


        res.status(200).json(returnSuccessInfo('update History', {History: history}))
    } catch (e) {
        res.status(500).json(returnError('update History', e))
    }
}

module.exports = {
    UpdateHistory
}
