let MarketPlaceInventoryModel = require("../models/MarketPlace_Inventory_Model");
let cloudinary = require("cloudinary");

let addInformationController = async (req, res) => {
  try {
    req.body.user = req.userid;

    let images = req.body.image;
    let cloudinayImageUrl = [];
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "inventroryImages",
      });

      cloudinayImageUrl.push({
        url: result.secure_url,
      });
    }
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
  try {
    console.log(req.params.id);
    let allInventoryData = await MarketPlaceInventoryModel.find().populate(
      "user"
    );

    res.status(200).send({
      success: true,
      message: "Successfully inventoryData fetched",
      allInventoryData,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Something went wrong ehite getting information",
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
      .populate("user").populate("oemSpecs");
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


//removeInformationController

let removeInformationController=async(req,res)=>{
    try {
        console.log(req.params.id);
       let removeInventory=await MarketPlaceInventoryModel.findByIdAndDelete({_id:req.params.id});
       res.status(200).send({success:true,message:"Inventory got removed !",removeInventory});
    } catch (error) {
        console.log(error);

        res.status(500).send({
          success: false,
          message: "Something went wrong ehite deleting information",
        });
    }
}

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
  removeInformationController
};
