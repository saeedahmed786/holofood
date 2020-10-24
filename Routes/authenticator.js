const jwt = require('jsonwebtoken');

authenticatorJWT = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.status(404).json({
            err: 'No Token. Access Denied'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'eer3423b4hb4h3b4g343b4vb3h34j5gj5bj5bj345gj235k5bv5cgg5gj5hv5hb5j53j5k3j59f8sd9fsdk3kj5hj35');
        req.user = decoded.user;
        next();
    } catch (err) {
        console.log('jwt error in cateogory', err);
        res.status(401).json({
            err: 'invalid token'
        });
        
    }
}
module.exports = authenticatorJWT;