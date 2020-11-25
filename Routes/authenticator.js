const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');

authenticatorJWT = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.status(404).json({
            err: 'No Token. Access Denied'
        });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded.user;
        next();
    } catch (err) {
        console.log('jwt error', err);
        res.status(401).json({
            err: 'invalid token'
        });
        
    }
}



module.exports = {authenticatorJWT};