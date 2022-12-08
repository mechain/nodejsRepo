const express = require("express");
const app = express();

//creating the route '/'
app.get('/' , (req, res ) => {
    res.status(200).send("Welcome To Nodejs");
});

// creating the server listening 
app.listen(5000 , () => {
    console.log('Server connected')
})