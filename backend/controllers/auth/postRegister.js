import User from "./../../models/user";
import bcryptjs from "bcryptjs";

const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // check if user exists
    const userExists = await User.exists({ email: email });
    if (userExists) {
      return res.status(409).send("User Already Exists!");
    }

    // encrypt password
    const encryptedPassword = await bcryptjs.hash(password, 10);

    // create user and save in db
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });
    //create jwt token
    const token = "jwt";
    res.status(201).json({
      email: user.email,
      username: user.username,
      token: token,
    });
  } catch (error) {
    res.status(500).send("Error! Please try again! ");
  }
};

export default postRegister;
