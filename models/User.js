const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  number: { type: String, min: 18, index: true },
  email: String,
});

module.exports = mongoose.model("User", UserSchema);
