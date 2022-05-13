const ReturnSuccessInfo = require('./returnSuccessInfo')
const ReturnError = require('./returnError')
const GeneratedJWT = require('./GeneratorJWT')

module.exports = {
    ...ReturnSuccessInfo,
    ...ReturnError,
    ...GeneratedJWT
}
