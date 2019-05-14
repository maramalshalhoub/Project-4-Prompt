const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

const jobSchema = new Schema({
 name: { type: String, required: true, unique : true},
 category_field:{ type: String, required: true},
 skills:{ type: String, required: true},
 duration: { type: Date, required: true}
},{timestamps : true})


const Job = mongoose.model('Job', jobSchema)
module.exports = Job
