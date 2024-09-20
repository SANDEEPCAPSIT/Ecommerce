const { z } = require("zod");

// create an object schema
const signupSchema = z.object({
    title: z
    .string({required_error: "Title is required"})
    .trim()
    .min(3,{message:"Title must be at lest of 4 chars."})
    .max(255,{message:"Title must bot be more then 255"}),

    company: z
    .string({required_error: "Company is required"})
    .trim() 
    .min(2,{message:"Company must be at lest of 4 chars."})
    .max(255,{message:"Company must bot be more then 255"}),

    category: z
    .string({ required_error: "Category is required" })
    .trim()
    .min(3, { message: "Category must be at lest 4 chars." })
    .max(255, { message: "Category must not be more than 255 characters long." }),


    price: z
    .string({required_error: "Price  is required"})
    .trim()
    .min(2,{message:"Price must be at lest of 5 chars."})
    .max(255,{message:"Price must bot be more then 1024"}),

    discount: z
    .string({required_error: "Discount is required"})
    .trim()
    .min(3,{message:"Discount must be at lest of 1 chars."})
    .max(1024, { message: "Discount must bot be more then 1024" }),
    
    stock: z
    .string({required_error: "Stock is required"})
    .trim()
    .min(1,{message:"Stock must be at lest of 1 chars."})
    .max(255,{message:"Stock must bot be more then 20"}),

    image: z
    .string({required_error: "Image is required"})
    .trim()
    .min(7,{message:"Image must be at lest of 6 chars."})
    .max(51024,{message:"Image must bot be more then 1024"}),

    description: z
    .string({required_error: "Description is required"})
    .trim()
    .min(3,{message:"Description must be at lest of 4 chars."})
    .max(2550,{message:"Description must bot be more then 2550"}),
    
});

module.exports = signupSchema;