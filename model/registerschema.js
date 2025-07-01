
const mongoose = require("mongoose");

const bcrypt  = require ('bcrypt')

const registerSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true }
});

// ======================================
// password hasing   imp.  nmp i bcrypt
// ======================================

registerSchema.pre("save", function(next){ 

  if(!this.isModified("password")){
    return next();
  }

  this.password = bcrypt.hashSync(this.password,10);
  next();
});


registerSchema.methods.comparepassword = function(plaintext, callback) { 
  return callback(null, bcrypt.compareSync(plaintext, this.password));
};

//  bcrypt  end

const Register = mongoose.model("Register", registerSchema);
module.exports = Register;
