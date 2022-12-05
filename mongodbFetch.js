require("dotenv").config();
const mongodb = require("mongodb").MongoClient;

const fetchDatabase = async () => {
    const cd = await mongodb.connect(`${process.env.MONGO_URI}`);
    const connect  = cd.db("aggregate");
    const collections = connect.collection("sample");
    collections.find().toArray().then((data) => {
        console.log(data)
    })
}



module.exports = fetchDatabase;