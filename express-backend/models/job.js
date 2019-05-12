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


// jobSchema.pre('save',function(next){
//     let user = this

//     if(user.password && user.isModified('password')){
        
//       bcrypt.hash(user.password, saltRounds, (err, hash)=>{
//         if(err){ return next()}

//         user.password = hash
//         next()
//       })
//     }

// })


// jobSchema.methods.verifyPassword = (plainPassword, hashedPassword, cb) => {

//  bcrypt.compare(plainPassword, hashedPassword, (err, response) => {
//    if(err) { 
//      return cb(err) 
//    }
//    return cb(null, response)
//  })
// }

const Job = mongoose.model('Job', jobSchema)
module.exports = Job