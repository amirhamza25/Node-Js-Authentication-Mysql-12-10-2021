const express = require('express');
const router = express.Router();
const verifyToken = require('../commonfun/auth');
// Registration
const Registration = require("../controller/Registration");
router.post("/registration",verifyToken,Registration);

const Login = require("../controller/Login");
router.post("/login",Login);


module.exports = router;