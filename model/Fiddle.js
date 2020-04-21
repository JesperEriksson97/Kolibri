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
    type: Array,
    required: true
  },
  data: {
    type: String,
    required: true
  },
  cursor: {
    type: Object
  }
})

const Fiddle = mongoose.model('Fiddle', FiddleSchema)

module.exports = Fiddle
