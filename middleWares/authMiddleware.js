
let dotenv=require("dotenv");
let JWT=require("jsonwebtoken");
dotenv.config();

//Protected route tokenbase
 let requireSignin = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    let decode =await JWT.verify(token, process.env.JWT_SECRET_KEY);

    console.log(decode);
    req.userid = decode._id;
    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports=requireSignin;