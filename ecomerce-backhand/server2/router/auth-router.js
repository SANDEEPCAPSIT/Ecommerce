const express = require("express");
const router = express.Router();

const authcontrollers = require("../controllers/auth-controllers");
const signupSchema = require("../validators/auth_validators");
const validate = require("../middlawere/validate_middlawere");


router.route("/").get(authcontrollers.home);
router.route("/products").post( validate (signupSchema), authcontrollers.product);
router.route("/login").post(authcontrollers.login);



module.exports = router;