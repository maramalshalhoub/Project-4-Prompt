const express = require('express')
const PORT = process.env.PORT || 5000
const server = express()
const cors = require('cors')
const upload = require('./upload')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}
server.use(cors())

const session = require('express-session')
//jwt and passports
const jwt = require('jsonwebtoken')
const passport = require('./config/passport')
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

server.post('/upload', upload)


server.use(passport.initialize())
server.use(passport.session())

//routes
server.use('/api/auth', require('./routes/auth.routes'))
server.use('/api/user', require('./routes/user.routes'))

//cannot find route
server.use('*', (request, response) => {
  response.status(404).json({message : "Data not found!"})
 })

server.listen(PORT, () => console.log(`connected to ${PORT}`))
