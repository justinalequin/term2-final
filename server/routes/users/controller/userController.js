const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

async function userSignUp(req, res) {
  const { firstName, lastName, userName, email, password } = req.body;
  try {
    let salt = await bcrypt.genSalt(10);
    let hashed = await bcrypt.hash(password, salt);

    const createUser = new User({
      firstName,
      lastName,
      userName,
      email,
      password: hashed,
    });

    let savedUser = await createUser.save();
    res.json({ message: "Success", payload: savedUser });
  } catch (e) {
    res.status(500).json({ message: "Create Error", error: e.message });
  }
}

async function userLogin(req, res) {
  const { email, password } = req.body;
  try {
    let foundUser = await User.findOne({ email: email });

    if (!foundUser) {
      return res.status(500).json({
        message: "Login Error",
        error: "Please Sign Up",
      });
    } else {
      let matchedPassword = await bcrypt.compare(password, foundUser.password);
      if (!matchedPassword) {
        return res.status(500).json({
          message: "Login Error",
          error: "Please check your email and password for accuracy",
        });
      } else {
        let jwtToken = jwt.sign(
          {
            email: foundUser.email,
            userName: foundUser.userName,
          },
          process.env.JWT_SECRET,
          { expiresIn: "48h" }
        );
        res.json({ message: "Login Success", payload: jwtToken });
      }
    }
  } catch (e) {
    res.status(500).json({ message: "Login Error", error: e.message });
  }
}

async function updateUser(req, res) {
  try {
    const { password } = req.body;

    const decodedData = res.locals.decodedData;

    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    req.body.password = hashedPassword;

    let updateUser = await User.findOneAndUpdate(
      { email: decodedData.email },
      req.body,
      { new: true }
    );

    res.json({
      message: "success",
      payload: updateUser,
    });
  } catch (e) {
    res.status(500).json({ message: "error", error: e.message });
  }
}

module.exports = {
  userSignUp,
  userLogin,
  updateUser,
};
