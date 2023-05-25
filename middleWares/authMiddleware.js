// import JWT from "jsonwebtoken";
// import dotenv from "dotenv";
// import UserModel from "../models/usersModel.js";

dotenv.config();

//Protected route tokenbase
export let requireSignin = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    let decode = JWT.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};
