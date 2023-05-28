let MarketPlaceInventoryModel = require("../models/MarketPlace_Inventory_Model");
let cloudinary = require("cloudinary");
const OEM_SpecsModel = require("../models/OEM_Specs_Model");

let addInformationController = async (req, res) => {
  try {
    req.body.user = req.userid;

    let image = req.body.image;
    let cloudinayImageUrl = "";

    const result = await cloudinary.v2.uploader.upload(image, {
      folder: "inventoryImages",
    });

    cloudinayImageUrl = result.secure_url;
    req.body.image = cloudinayImageUrl;
    let newInformation = new MarketPlaceInventoryModel(req.body);
    await newInformation.save();

    res.status(200).send({
      success: true,
      message: "Added info successfully",
      newInformation,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Something went wrong while adding information",
    });
  }
};

//getAllInformationController

let getInformationController = async (req, res) => {
  let { order, filter } = req.query;
  console.log(filter, order);
  
  try {
    //filter by price
    if (filter === "price") {
      let flteredData;
      //filter by price in desc order
      if (order === "desc") {
        flteredData = await MarketPlaceInventoryModel.aggregate([
          {
            $lookup: {
              from: "oem_specs", // Replace 'oem_specs' with the actual collection name of the OEM_Spec model
              localField: "oemSpecs",
              foreignField: "_id",
              as: "oemSpecs",
            },
          },
          { $unwind: "$oemSpecs" },
          { $sort: { "oemSpecs.listPrice": -1 } }, // Sort by listPrice in descending order
        ]);
        console.log(flteredData);
        res.status(200).send({
          success: true,
          message: "Successfully inventoryData fetched",
          flteredData,
        });
      } else {
        //filter by price in asc order
        flteredData = await MarketPlaceInventoryModel.aggregate([
          {
            $lookup: {
              from: "oem_specs", // Replace 'oem_specs' with the actual collection name of the OEM_Spec model
              localField: "oemSpecs",
              foreignField: "_id",
              as: "oemSpecs",
            },
          },
          { $unwind: "$oemSpecs" },
          { $sort: { "oemSpecs.listPrice": 1 } }, // Sort by listPrice in ascending order
        ]);

        res.status(200).send({
          success: true,
          message: "Successfully inventoryData fetched",
          flteredData,
        });
      }
    }else if (filter === "mileage") {
      let flteredData;
      // filter by mileage
      if (order === "desc") {
        flteredData = await MarketPlaceInventoryModel.aggregate([
          {
            $lookup: {
              from: "oem_specs", // Replace 'oem_specs' with the actual collection name of the OEM_Spec model
              localField: "oemSpecs",
              foreignField: "_id",
              as: "oemSpecs",
            },
          },
          { $unwind: "$oemSpecs" },
          { $sort: { "oemSpecs.mileage": -1 } }, // Sort by mileage in descending order
        ]);
      } else {
        flteredData = await MarketPlaceInventoryModel.aggregate([
          {
            $lookup: {
              from: "oem_specs", // Replace 'oem_specs' with the actual collection name of the OEM_Spec model
              localField: "oemSpecs",
              foreignField: "_id",
              as: "oemSpecs",
            },
          },
          { $unwind: "$oemSpecs" },
          { $sort: { "oemSpecs.mileage": 1 } }, // Sort by mileage in ascending order
        ]);
      }
    
      res.status(200).send({
        success: true,
        message: "Successfully fetched inventoryData",
        flteredData,
      });
    } else {
      let flteredData = await MarketPlaceInventoryModel.find({})
        .populate({ path: "oemSpecs" })
        .populate("user");

      res.status(200).send({
        success: true,
        message: "Successfully inventoryData fetched",
        flteredData,
      });
    }
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Something went wrong while getting information",
    });
  }
};

//getSingleInformationController

let singleInventoryData = async (req, res) => {
  try {
    console.log(req.params);

    let singleInventoryData = await MarketPlaceInventoryModel.findById(
      req.params.id
    )
      .populate("user")
      .populate("oemSpecs");
    console.log(singleInventoryData);
    res.status(200).send({
      success: true,
      message: "Successfully SingleinventoryData fetched",
      singleInventoryData,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Something went wrong ehite getting information",
    });
  }
};

//updateInformationController

let updateInformationController = async (req, res) => {
  try {
    console.log(req.params.id);
    let updateInventory = await MarketPlaceInventoryModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res
      .status(200)
      .send({ success: true, message: "Inventory updated !", updateInventory });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Something went wrong ehite updating information",
    });
  }
};

//removeInformationController

let removeInformationController = async (req, res) => {
  try {
    console.log(req.params.id);
    let removeInventory = await MarketPlaceInventoryModel.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).send({
      success: true,
      message: "Inventory got removed !",
      removeInventory,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Something went wrong ehite deleting information",
    });
  }
};

//uniqueUser
let userInventoryData = async (req, res) => {
  try {
    let userid = req.body.userid;

    let userInventoryData = await MarketPlaceInventoryModel.find({
      user: userid,
    });

    res.status(200).send({
      success: true,
      message: "Successfully SingleinventoryData fetched",
      userInventoryData,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Something went wrong ehite getting information",
    });
  }
};

module.exports = {
  addInformationController,
  getInformationController,
  singleInventoryData,
  updateInformationController,
  removeInformationController,
};
