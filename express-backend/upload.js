const IncomingForm = require('formidable').IncomingForm
const User = require('./models/user');


module.exports = function upload(req, res) {
  var form = new IncomingForm()

  form.on('file', (field, file) => {
    console.log(file);
    
    // let newUser = new User()

    User.findByIdAndUpdate("5cd7e853a5c7e497fc63edbf", { resume: file.path }, {new: true})
    .then(user =>{
      console.log(user);
      
      // user.resume = file.path
      // console.log( user.resume);
      // user.save();
    })
    .catch(err =>{
      console.log(err);
  })
})
  form.on('end', () => {
    res.json()
  })
  form.parse(req)
}