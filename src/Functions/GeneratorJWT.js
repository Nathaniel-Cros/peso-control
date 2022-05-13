const jwt = require('jsonwebtoken')

const generatedJWT = ( uid = '' ) => {

    return new Promise((resolve, reject) => {

        const payload = { uid: (btoa(uid)).replace('==','') }

        jwt.sign( payload, process.env.SECRETKEY, {
            algorithm: 'HS256',
            expiresIn: '1y'
        }, (err, token) => {
            if (err) {
                console.error('Error in generated JWT', err)
                reject(err)
            } else {
                resolve(token)
            }
        })
    })

}

module.exports = {
    generatedJWT
}
