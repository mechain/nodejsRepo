const mongoose = require('mongoose');

export const databaseConnect = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/nodejsProject" , {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    const connection = mongoose.connection;
    connection.once("open" , () => console.log("Database connection succesful"));
    connection.on("error" , (err) => {
        console.log("Error occured" + err);
        process.exit();
    })

}
