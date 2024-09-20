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

const product = async (req, res) => {
    try {
        console.log(req.body);
        // const { username, email, phone, password } = req.body;
        const { title, company, category, price, discount, image, description, stock, } = req.body;
        

        const userExist = await User.findOne({ title });

        if (userExist) {
            return res.status(400).json({ msg: "title alredy exist" });
        }

        

       
        var userCreated = await User.create({
             title,
             company,
             category,
             price,
             discount,
             image,
             description,
             stock,
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

// const login = async (req, res) => {
//     try {
//          console.log(req.body);
//          const { email, password } = req.body;
//          const userExist = await User.findOne({ email });
//          console.log(userExist);
            
            

//     } catch (error) {
//         console.log(error);
//     }
// };




module.exports = { home, product, login };