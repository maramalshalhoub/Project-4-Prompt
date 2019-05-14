const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

const clientSchema = new Schema({
 name: { type: String, required: true, unique : true},
 email : { type: String, required: true, unique : true},
 category_field:{ type: String, required: true},
 password : { type: String, required: true}
},{timestamps : true})



const Client = mongoose.model('Client', clientSchema)
module.exports = Client