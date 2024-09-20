const mongoose = require("mongoose");

// const URI ="mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);

// const URI = process.env.MONGODB_URI;
const URI = "mongodb+srv://Product-1:mATlBDphB9iJWVYa@cluster0.0bo6s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const connectDb = async () => {
    
    try{
        // console.log(URI);
         mongoose.connect(URI);
        console.log("connection successful too DB");
    }catch(error) {
        console.error("database connection to  failed");
        process.exit(0);
    }
};

module.exports = connectDb;