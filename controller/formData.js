const formData = (req,res) => {
    
    res.send("Form data is" + JSON.stringify(req.body));

}
module.exports = formData;