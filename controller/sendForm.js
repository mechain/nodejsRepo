const path = require('path')


const sendForm = (req,res) => {
    // res.sendFile()
    res.sendFile(path.join(__dirname+ "/form.html"))
    // console.log(__dirname)
}

module.exports =  sendForm