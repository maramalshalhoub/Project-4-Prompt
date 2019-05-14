const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

const userSchema = new Schema({
 userType: {type: Boolean},
 name: { type: String},
 email : { type: String},
 category_field:{ type: String},
 skills:{ type: String},
 resume:{ type: String},
 password : { type: String},
},{timestamps : true})

// const userSchema = new Schema({
//   name: { type: String, required: true, unique : true},
//   email : { type: String, required: true, unique : true},
//   category_field:{ type: String, required: true},
//   skills:{ type: String, required: true},
//   resume:{ type: String, required: true},
//   password : { type: String, required: true}
//  },{timestamps : true})
 
userSchema.pre('save',function(next){
    let user = this

    if(user.password && user.isModified('password')){
        
      bcrypt.hash(user.password, saltRounds, (err, hash)=>{
        if(err){ return next()}

        user.password = hash
        next()
      })
    }

})


userSchema.methods.verifyPassword = (plainPassword, hashedPassword, cb) => {

 bcrypt.compare(plainPassword, hashedPassword, (err, response) => {
   if(err) { 
     return cb(err) 
   }
   return cb(null, response)
 })
}

const User = mongoose.model('User', userSchema)
module.exports = User