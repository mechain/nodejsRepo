const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/nodejsProject" , (err) => {
    if(err){ console.log(err)}
    console.log("Database connected Succesfully")
});


const UserSchema = new mongoose.Schema({
    name:String , 
    age : Number ,
    email:String , 
    phone : Number  
});

const User = mongoose.model("userInfo" , UserSchema);

const data = {
    name:"name2",
    age: 22,
    email:"email2@gmail.com",
    phone : 99999999991
}
const addUser = async(data) => {
    const newUser =await  User.insertMany(data);
    console.log(newUser)
}


// addUser()

const find = async () => {
    const user = await User.find({});
    console.log(user)
}

find()