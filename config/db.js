const mongoose =require("mongoose");
//import env variable
require("dotenv").config();
const mongoURI = process.env.db_url;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected");
    } catch {
        console.log(error);
    }
}

module.exports = connectDB;