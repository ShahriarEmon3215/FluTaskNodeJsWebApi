const { verify } = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  try {
    const token = bearerToken.split(" ")[1];
    const decodedData = verify(token, process.env.JWT_SECRET);
    const { id } = decodedData;
    req.userId = id;
    next();
  } catch (ex) {
    next("Invalid token");
  }
};

module.exports = checkLogin;
