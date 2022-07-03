const express = require('express');
const router = express.Router();
const Signup = require("../controllers/signup");
const Login = require("../controllers/login");
const Dashboard = require("../controllers/dashboard")
const jwtAuth = require('../middleware/jwtAuth')

router.post('/signup', Signup.signup);

router.post('/login', Login.login);

router.get('/dashboard', jwtAuth, Dashboard.dashboard);

module.exports = router;