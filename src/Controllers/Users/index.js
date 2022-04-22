const AddUser = require('./add')
const DeleteUser = require('./delete')
const UpdateUser = require('./update')
const GetUser = require('./get')
const GetAllUsers = require('./getAll')

module.exports = {
    ...AddUser,
    ...DeleteUser,
    ...UpdateUser,
    ...GetUser,
    ...GetAllUsers,
}
