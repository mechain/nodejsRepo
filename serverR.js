const express = require("express");
const app = express();

const task = require("./route");
//creating the route '/'



app.get('/' , (req, res ) => {
    res.status(200).send("Welcome To Nodejs");
});

app.use('/',task)

// creating the server listening 
app.listen(5000 , () => {
    console.log('Server connected')
})