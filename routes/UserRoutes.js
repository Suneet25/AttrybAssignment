let express = require("express");
let {
  registerController,
  loginController,
} = require("../controller/UserController");

let userRoutes = express.Router();

//register
userRoutes.post("/register", registerController);

//login
userRoutes.post("/login", loginController);

module.exports = userRoutes;
