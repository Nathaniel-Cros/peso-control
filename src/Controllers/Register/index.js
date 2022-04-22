const AddHistory = require('./add')
const DeleteHistory = require('./delete')
const UpdateHistory = require('./update')
const GetHistory = require('./get')
const GetAllHistories = require('./getAll')

module.exports = {
    ...AddHistory,
    ...DeleteHistory,
    ...UpdateHistory,
    ...GetHistory,
    ...GetAllHistories,
}
