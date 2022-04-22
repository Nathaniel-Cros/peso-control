const infoValidate = require('./infoValidate')
const validateJWT = require('./validateJWT')


module.exports = {
    ...infoValidate,
    ...validateJWT
}
