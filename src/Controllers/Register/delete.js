const { response } = require('express')

const { returnError } = require('../../Functions')
const {History} = require('../../Models/history')


const DeleteHistory = async (req, res = response) => {
    try {
        const {id} = req.params

        const history = await History.findByPk(id)

        if( !history ) {
            return res.status(400).json(returnError('get History', 'History not found'))
        }

        await History.destroy({
            where: {
                id
            },
            force: true
        })

        res.status(204).json({})
    } catch (e) {
        res.status(500).json(returnError('delete History', e))
    }
}

module.exports = {
    DeleteHistory
}
