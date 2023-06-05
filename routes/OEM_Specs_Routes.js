let express = require("express");
const {
  OEM_SpecsGetController,
  Get_OEM_SpaceController,
} = require("../controller/OEM_Specs_Controller");

let OEM_SpecsRoutes = express.Router();

//add OEM_Spec
OEM_SpecsRoutes.post("/add-OEM_Specs", OEM_SpecsGetController);

//search query and get all OEM_Specs
OEM_SpecsRoutes.get("/get-OEM_Specs", Get_OEM_SpaceController);

module.exports = OEM_SpecsRoutes;
