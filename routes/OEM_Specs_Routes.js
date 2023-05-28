let express=require("express");
const {OEM_SpecsGetController,Get_OEM_SpaceController} = require("../controller/OEM_Specs_Controller");

let OEM_SpecsRoutes=express.Router();

//this route is used to search the specifications of oem model and give documents on the baseis of dynmacillay
//search query

OEM_SpecsRoutes.post("/add-OEM_Specs",OEM_SpecsGetController);


OEM_SpecsRoutes.get("/get-OEM_Specs",Get_OEM_SpaceController);



module.exports=OEM_SpecsRoutes;