// Imports
const { express, bodyParser, cors } = require('../imports/imports')

// Express Instance
    const app = express()

    // Body Parser config
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.use(cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }));

// End - Express Instance

// Module Export
module.exports = app