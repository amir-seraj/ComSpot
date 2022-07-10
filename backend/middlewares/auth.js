import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];
  if (!token) {
    res.status(403).send("token required for authentication!");
  }
  try {
    token = token.replace(/^Bearer\s+/, "");
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
  } catch (error) {
    res.status(401).send(`Invalid Token ${error}`);
  }
  return next();
};
export default verifyToken;
