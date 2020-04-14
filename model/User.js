const mongoose = require('mongoose')
const brcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastname: {
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
  brcrypt.genSalt(10, function(err, salt) {
    brcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash
      newUser.save(callback)
    })
  })
}