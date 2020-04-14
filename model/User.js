const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
module.exports.createUser = function(newUser, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash
      newUser.save(callback)
    })
  })
}

module.exports.getUserByUsername = function(username, callback) {
  console.log(username + ' We are in getUserByEmail')
  const query = ({ username: username })
  User.findOne(query, callback)
}

module.exports.getUserById = function(id, callback) {
  console.log(id + ' We are in getUserById')
  User.findById(id, callback)
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch)
  })
}