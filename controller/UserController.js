const UserModel = require("../models/UserModel");
const JWT = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helper/UserHelper");
let dotenv=require("dotenv");

//config environmental
dotenv.config();
//registerController

let registerController = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    console.log(name, email, password);
    //validation

    if (!name) {
      return res.send({ message: "Name is required !" });
    }
    if (!email) {
      return res.send({ message: "Email is required !" });
    }
    if (!password) {
      return res.send({ message: "Password is required !" });
    }

    //check-existingUser

    let existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res
        .status(200)
        .send({
          success: false,
          message: "User already exists please login !",
        });
    }

    //hashpassword

    let hashedpassword = await hashPassword(password);

    //saveUser

    let user = await new UserModel({
      name,
      email,
      password: hashedpassword,
    }).save();
    await res
      .status(201)
      .send({ success: true, message: "User registered successfully !", user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({
        success: false,
        message: "Something is wrong please try again !",
        error,
      });
  }
};

//loginController

let loginController = async (req, res) => {
    try {
      let { email, password } = req.body;
  
      //validation
      if (!email || !password) {
        return res.send({ message: "Email and Password are required" });
      }
  
      let user = await UserModel.findOne({ email });
      if (!user) {
        return res
          .status(200)
          .send({ success: false, message: "Email is not registered" });
      }
  
      //match
  
      let match = await comparePassword(password, user.password);
  
      if (!match) {
        return res
          .status(200)
          .send({ success: false, message: "Enter correct password" });
      }
      //token
  
      let token = await JWT.sign(
        {
          _id: user._id,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "7d" }
      );
  
      res.status(200).send({
        success: true,
        message: "Login successfull !",
        user: {
          name: user.name,
          email: user.email,
      
        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({ success: false, message: "Error in login", error });
    }
  };
module.exports = { registerController, loginController };


