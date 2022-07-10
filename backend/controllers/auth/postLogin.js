import User from "../../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    const comparePassword = await bcryptjs.compare(password, user.password);
    if (user && comparePassword) {
      //send new token
      const token = jwt.sign(
        {
          userId: user._id,
          email: email,
        },
        process.env.TOKEN_KEY,
        { expiresIn: "24h" }
      );
      return res.status(200).json({
        userDetails: {
          token: token,
          email: user.email,
          username: user.username,
        },
      });
    }
    res.status(400).send("Invalid Credentials!");
  } catch (error) {
    return res.status(500).send(`Please try again ${error}`);
  }
};

export default postLogin;
