require("dotenv").config();
const databaseConnect = require("./connection.js");


databaseConnect(process.env.MONGO_URI)