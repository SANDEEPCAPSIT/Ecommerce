const User = require("../models/user_models");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res
            .status(200)
            .send(
                "Welcome to Best using Router sandeep"
            )

    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;
        

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "email alredy exist" });
        }

        //hash the pasword
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);

        // console.log("jhkjh",hash_password);
        var userCreated = await User.create({
             username, 
             email,
             phone,
             password: hash_password
            });


        console.log("hhhh",userCreated)
        
        const token = await User.generateToken()

        res.status(201).json({
             msg: "registration successful",
            token,
             userId: userCreated._id.toString () 
            });
    } catch (error) {
        console.error("error", error)
        res.status(500).json("internal server error");
        // next(error);
    }
};

// user login logic

const login = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        console.log(userExist);

        if (!userExist){
            return res.status(400).json({ massage: "invalid email Caredentials" });
        }

        const user = await bcrypt.compare(password, userExist.password);
        
        // const user = await userExist.comparePassword(password);
        console.log(user);

        if(user){
            res.status(200).json({
                msg: "Login successful",
                // token: await userExist.generateToken(),
                userId: userExist._id.toString (), 
               });
        } else {
            res.status(401).json({massage: "Invalid email or password"});
        }
    }   catch(error) {
        res.status(500).json("internal server error");
        next(error);
        console.log(error);
        
        
    }
}   






module.exports = { home, register, login };