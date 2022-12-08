const mongodb = require("mongodb").MongoClient ;



const getData = async (req , res) => {
    const cd = await mongodb.connect("mongodb://127.0.0.1:27017/");
    const connect  = cd.db("aggregate");
    const collections = connect.collection("sample");
    collections.find().toArray().then((data) => {
        res.status(200).send(data)
    })
}


module.exports = getData;