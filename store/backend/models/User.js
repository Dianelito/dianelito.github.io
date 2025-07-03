const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  discordId: String,
  username: String,
  avatar: String,
  balance: { type: Number, default: 0 },
  purchases: [String],
});

module.exports = mongoose.model('User', UserSchema);