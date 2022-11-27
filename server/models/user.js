const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  username: { type: String, required:  true },
  email: { type: String, required: true },
  mobile:{type:Number,required:true},
  password: { type: String, required: true },
  id: { type: String },
});
var UserModel = mongoose.model('UserModel', userSchema);
module.exports= UserModel;