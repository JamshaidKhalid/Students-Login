const users = require("../models/users");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');




exports.signup = async (req, res) => {

    try {
        if (await (users.findOne({ email: req.body.email }))) {
            return res.status(422).json({ errors: [{ msg: 'User already exists' }] });
        }

        //encrypting and hashing the password and hashed password will be stored in database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //creating the user instance
        const user = await new users({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword
        });







        await user.save().catch(err => console.log(err));

        const data = {
            id: user.id
        }

        //this token will be sent to the user and will be used to authenticate the user
        //jwt.sing() is taking userData which is in this case ID of user generated by mongoDB and a secret password
        const authToken = jwt.sign(data, process.env.SECRET_KEY);

        res.send({ authToken });


    } catch (e) {
        console.log(e);
        res.status(500).send("Some error has occured");
    }
}