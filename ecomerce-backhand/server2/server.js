require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlawere/error_middlawer");

// Ensure the environment variables are loaded

// const URI = process.env.MONGODB_URI;
const corsOptions = {
    origin: "*",
    methods: "GET, POST, PUT, DELETE, PATCH",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

const PORT = 7000;

const URI = "mongodb+srv://Product-1:mATlBDphB9iJWVYa@cluster0.0bo6s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URI).then(() => {
       app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
    });
}).catch(() => {
      console.log("error while connecting to db")
  });

// connectDb().then(() => {
//     app.listen(PORT, () => {
//         console.log(`server is running at port: ${PORT}`);
//     });
// });
