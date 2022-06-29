const express = require('express');
const router = express.Router();
const Signup = require("../controllers/signup");
const Login = require("../controllers/login");
const fetchUser = require('../middleware/jwtAuth')

router.post('/signup', Signup.signup);

router.post('/login', Login.login);

module.exports = router;