const express = require("express");
const router = express.Router();

const authcontrollers = require("../controllers/auth-controllers");
const signupSchema = require("../validators/auth_validators");
const validate = require("../middlawere/validate_middlawere");


router.route("/").get(authcontrollers.home);
router.route("/register").post( validate (signupSchema), authcontrollers.register);
router.route("/login").post(authcontrollers.login);



module.exports = router;