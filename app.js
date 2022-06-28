const express = require("express");
const app = express();

// Connect to database
const connection = require("./database/db");
connection.once("open", () => console.log("Connection connected to Database"));
connection.on("error", (error) => console.log("Connection error: ", error));

// AdminBro
const AdminBro = require("admin-bro");
const expressAdminBro = require("@admin-bro/express");
const mongooseAdminBro = require("@admin-bro/mongoose");

// Models
const User = require("./models/User");
const Post = require("./models/Post");

AdminBro.registerAdapter(mongooseAdminBro);
const AdminBroOptions = { resources: [User, Post] };

const adminBro = new AdminBro(AdminBroOptions);
const router = expressAdminBro.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);

app.get("/", (req, res) => {
  res.send("Dashboard con Node");
});

app.listen(3000, () => {
  console.log("Server UP! en http://localhost:3000");
});
