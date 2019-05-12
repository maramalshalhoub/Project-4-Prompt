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


// clientSchema.pre('save',function(next){
//     let user = this

//     if(user.password && user.isModified('password')){
        
//       bcrypt.hash(user.password, saltRounds, (err, hash)=>{
//         if(err){ return next()}

//         user.password = hash
//         next()
//       })
//     }

// })


// clientSchema.methods.verifyPassword = (plainPassword, hashedPassword, cb) => {

//  bcrypt.compare(plainPassword, hashedPassword, (err, response) => {
//    if(err) { 
//      return cb(err) 
//    }
//    return cb(null, response)
//  })
// }

const Client = mongoose.model('Client', clientSchema)
module.exports = Client