const mongoose = require("mongoose");
const uri = "mongodb://localhost/base_adminbro";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

module.exports = connection;
