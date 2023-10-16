const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) => {
    // console.log(req.headers);
    const token = req.headers['authorization'].split(' ')[1];
    var decoded = jwt.verify(token, 'shhhhh');
    // console.log(decoded.foo, decoded.userId);
    if (Object.keys(decoded).length === 0) res.json("Invalid User");
    else next();
}

module.exports = authMiddleware;