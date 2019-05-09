const express = require('express')
const PORT = process.env.PORT
const server = express()
const cors = require('cors')
const upload = require('./upload')

const session = require('express-session')
//jwt and passports
const jwt = require('jsonwebtoken')
const passport = require('passport')
//mongoose connection
const mongooseConnect = require('./config/mongodb')


//allows json to be sent to via request express
server.use(express.json())

//create session for passport
server.use(session({
 secret : "test",
 resave : false,
 saveUninitialized : true
}))


var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }

server.post('/upload', upload)
server.use(cors(corsOptions))


server.use(passport.initialize())
server.use(passport.session())



server.listen(PORT, () => console.log(`connected to ${PORT}`))
