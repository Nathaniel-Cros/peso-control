const { response } = require('express')

const { returnError, returnSuccessInfo } = require('../../Functions')
const {History} = require('../../Models/history')

const AddHistory = async (req, res = response) => {
    try {
        const userId = req.uid
        const { weight, hasCalories, calories, hasWater, litersWater } = req.body

        const newRegister = new History({userId, weight, hasCalories, calories, hasWater, litersWater})

        await newRegister.save()

        res.status(201).json(returnSuccessInfo('new History', {History: newRegister}))
    } catch (e) {
        res.status(500).json(returnError('new History', e))
    }
}

module.exports = {
    AddHistory
}
