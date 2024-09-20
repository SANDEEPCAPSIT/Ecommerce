const { z } = require("zod");

// create an object schema
const signupSchema = z.object({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3,{message:"Name must be at lest of 4 chars."})
    .max(255,{message:"Nmae must bot be more then 255"}),

    // email: z
    // .string({required_error: "Email is required"})
    // .trim() 
    // .email({message: "Invalid email address"})
    // .min(6,{message:"Email must be at lest of 4 chars."})
    // .max(255,{message:"Email must bot be more then 255"}),

    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(6, { message: "Email must be at least 6 characters long." })
    .max(255, { message: "Email must not be more than 255 characters long." }),


    phone: z
    .string({required_error: "Phone  is required"})
    .trim()
    .min(10,{message:"Phone must be at lest of 10 chars."})
    .max(255,{message:"Phone must bot be more then 20"}),

    password: z
    .string({required_error: "Password is required"})
    .trim()
    .min(7,{message:"Password must be at lest of 6 chars."})
    .max(1024,{message:"Password must bot be more then 1024"}),
});

module.exports = signupSchema;