const mongoose = require("mongoose");

// const URI ="mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);

// const URI = process.env.MONGODB_URI;
const URI = "mongodb+srv://db_user:wBvG2g9XM4fgyneI@test-pro-db.vw4gylo.mongodb.net/mern-admin?retryWrites=true&w=majority&appName=test-pro-db"
"wBvG2g9XM4fgyneI"

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