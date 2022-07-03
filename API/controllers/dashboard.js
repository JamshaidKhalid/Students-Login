const Users = require("../models/users");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');




exports.dashboard = async (req, res) => {


    try {
        const userId = req.user.id;
        const user = await Users.findById(userId).select("-password");
        res.send(user);

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");

    }
}