if(!process.env.ENV) {
    require('dotenv').config()
}

const app = require('./src/app')
const http = require('http')
const port = process.env.PORT || 3000
const env = 'dev'
http.createServer(app).listen(port, () => console.log('Server running. Port:',port,'Env:',env))
