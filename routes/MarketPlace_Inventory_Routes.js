let express=require("express");

let {addInformationController,getInformationController,singleInventoryData,removeInformationController}=require("../controller/MarketPlace_Inventory_Controller");
const requireSignin = require("../middleWares/authMiddleware");



let MarketPlace_inventory_Routes=express.Router();

//addInformation Route
MarketPlace_inventory_Routes.post("/add-inventoryInfo",requireSignin,addInformationController);

//removeInformation Route
MarketPlace_inventory_Routes.delete("/remove-inventoryInfo/:id",requireSignin,removeInformationController);


//getInformation Route
MarketPlace_inventory_Routes.get("/get-inventoryInfo",getInformationController);

// singleInventoryData Route
MarketPlace_inventory_Routes.get("/get-SingleinventoryInfo/:id",singleInventoryData);

module.exports=MarketPlace_inventory_Routes;