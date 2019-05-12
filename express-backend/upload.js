const IncomingForm = require('formidable').IncomingForm
const User = require('./models/user');


module.exports = function upload(req, res) {
  var form = new IncomingForm()

  form.on('file', (field, file) => {
    console.log(file);
    
    let newUser = new User()

    User.find()
    .then(user =>{
      newUser.resume = file.path
      console.log( newUser.resume);
      newUser.save();
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