let express = require("express");

let {
  addInformationController,
  getInformationController,
  singleInventoryData,
  updateInformationController,
  removeInformationController,
} = require("../controller/MarketPlace_Inventory_Controller");

//middleware
const requireSignin = require("../middleWares/authMiddleware");

let MarketPlace_inventory_Routes = express.Router();

//addInformation Route
MarketPlace_inventory_Routes.post(
  "/add-inventoryInfo",
  requireSignin,
  addInformationController
);

//updateInformationController
MarketPlace_inventory_Routes.patch(
  "/remove-inventoryInfo/:id",
  requireSignin,
  updateInformationController
);

//removeInformation Route
MarketPlace_inventory_Routes.delete(
  "/remove-inventoryInfo/:id",
  requireSignin,
  removeInformationController
);

//getAllInformation Route
MarketPlace_inventory_Routes.get(
  "/get-inventoryInfo",
  getInformationController
);

// singleInventoryData Route
MarketPlace_inventory_Routes.get(
  "/get-SingleinventoryInfo/:id",
  singleInventoryData
);

module.exports = MarketPlace_inventory_Routes;
