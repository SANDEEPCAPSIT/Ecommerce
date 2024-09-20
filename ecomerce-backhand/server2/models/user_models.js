const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { compare } = require("bcryptjs");
// const { description, required } = require("../validators/auth_validators");

const userSchema = new mongoose.Schema({
    
    title:{
        type: String,
        require: true,
    },
    company:{
        type: String,
        require: true,
    },
    category:{
        type: String,
        require: true,
    },
    price:{
        type: String,
        require: true,
    },
    discount:{
        type: String,
        require: true,
    },
    stock:{
        type: String,
        require: true,
    },
    image:{
        type: String,
        require: true,
    },

    // description:{
    //     type: String,
    //     default: true,
    // },
    description:{
        type: String,
        require: true,
    },
});

// // compare the password
// userSchema.method.comparePassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// }



//json web token
userSchema.method.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRTECT_KEY,
        {
            expiresIn: "30d",
        }

        );
    } catch (error) {
        console.error(error);
    }

};


// define the modele or the collection name
const User = new mongoose.model("User",userSchema);
module.exports = User;