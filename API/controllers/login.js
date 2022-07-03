const users = require("../models/users");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');




exports.login = async (req, res) => {

    const { email, password } = req.body;

    try {
        if (!req.body.email || !req.body.password) {
            return res.status(422).json({ errors: [{ msg: 'Please enter your email & password' }] });
        }


        //checking if the user exists in database or not
        let user = await users.findOne({ email });
        if (!user) {
            return res.status(401).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        // comparing the password entered by the user with the hashed password in database
        // bcrypt.compare() is a method which will return true if the password entered by the user is same as the hashed password in database
        if (!await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }


        //finally if the user exists and the password is correct then we will send a session/token/jwt token to the user
        const data = {
            id: user.id
        }

        //this token will be sent to the user and will be used to authenticate the user
        //jwt.sign() is taking userData which is in this case ID of user generated by mongoDB and a secret password
        const authToken = jwt.sign(data, process.env.SECRET_KEY);

        res.send({ authToken });

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");

    }
}