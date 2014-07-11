var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var bcrypt   = require('bcryptjs');

var SALT_WORK_FACTOR = 10;

var User = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email:    { type: String, required: true, index: { unique: true } }
});

// Password Hashing Middleware
User.pre('save', function(next){
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')){ return next(); }

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(error, salt) {
    if(error){ return next(error); }

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, function(error, hash) {
      if(error){ return next(error); }

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });

});

// Password Verification
User.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(error, isMatch) {
    if (error){ return cb(err); }
    return cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', User);
