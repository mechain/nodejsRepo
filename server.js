require("dotenv").config();
const databaseConnect = require("./connection.js");
const fetchDatabase = require("./mongodbFetch");





//fetching the database without model using the mongodb client 
fetchDatabase();







//connection with database with the help of model mongoose ORM used
// databaseConnect(process.env.MONGO_URI)