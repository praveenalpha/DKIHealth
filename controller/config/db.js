const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log("db connected succesfully");
    }
    catch(error){
        console.log("Error in db.js file XXXXX", error);
        process.exit();
    }
}

module.exports = connectDB;