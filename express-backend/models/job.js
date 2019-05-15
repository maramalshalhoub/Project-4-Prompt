const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
 name: { type: String, required: true, unique : true},
 category_field:{ type: String, required: true},
 skills:{ type: String, required: true},
 start: { type: Date, required: true},
 end: { type: Date, required: true},
 description: { type: Date, required: true}
},{timestamps : true})


const Job = mongoose.models.Job || mongoose.model('Job', jobSchema)
module.exports = Job
