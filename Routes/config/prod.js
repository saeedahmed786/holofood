module.exports = {
    mongoURI: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET || 'eer3423b4hb4h3b4g343b4vb3h34j5gj5bj5bj345gj235k5bv5cgg5gj5hv5hb5j53j5k3j59f8sd9fsdk3kj5hj35',
    jwtExpire: process.env.JWT_EXPIRE || '12h'
};