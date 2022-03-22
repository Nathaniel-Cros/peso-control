const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const {db} = require("./db/connection");

class ServerClass {
    constructor() {
        this.app = express()
        this.app.set('port', process.env.PORT || 4100)

        this.DbConnection()
        this.Middleware()

        this.Routes()
    }

    Routes() {
        this.app.use('/users', require('./Routes/User'))
    }

    Listen() {
        this.app.listen( this.app.get('port'), () => {
            console.log('listening on port ' + this.app.get('port'))
        })
    }

    Middleware() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(morgan('dev'))
        this.app.use(cors())
    }

    async DbConnection() {
        try {
            await db.authenticate()
            console.log('...Database connection established...')
        } catch (e) {
            console.error('Error in connection to db -> ', e)
        }

    }
}

module.exports = ServerClass