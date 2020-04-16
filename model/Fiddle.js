const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const FiddleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  collaborators: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  }
})

const Fiddle = mongoose.model('Fiddle', FiddleSchema)

module.exports = Fiddle