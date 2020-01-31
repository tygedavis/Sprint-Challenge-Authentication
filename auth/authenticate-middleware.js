const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err){
        res.status(401).json({ message: "That is the wrong token" })
      } else {
        next();
      }
    })
  } else {
    res.status(401).json({ error: "Token needed" });
  };
};
