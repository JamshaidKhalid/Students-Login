const { response } = require('express');
const jwt = require('jsonwebtoken');



//fetchuser is a middleware which will be used to check if the user is logged in or not
//if the user is logged in it will provide userID using his/her jwt token and then async function will be called
const jwtAuth = (req, res, next) => {
    const authHeader = req.header('authToken');

    if (!authHeader) {
        res.status(403).json({ msg: 'Not authenticated' });
    }

    try {
        const data = jwt.verify(authHeader, process.env.SECRET_KEY);
        req.user = data;    //this will be available in the request object
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Some error occured' });
    }
}


module.exports = jwtAuth;