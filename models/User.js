const mongoose = require('mongoose');

const UserShame = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['guest', 'user', 'admin'],
    default: 'user',
  },
});

module.exports = mongoose.model('User', UserShame);