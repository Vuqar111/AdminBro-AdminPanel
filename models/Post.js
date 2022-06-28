const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {type: String, required: true},
  contenido: String,
});

module.exports = mongoose.model("Post", PostSchema);
