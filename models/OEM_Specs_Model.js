const mongoose = require("mongoose");

//this is the oem Specifications model Schema which states that all the keys of oem Specifications document will not more than
//thsese given keys and of specific types mentioned also in the problem statement

const oemSpecsModelSchema = mongoose.Schema({
  model: { required: true, type: String },
  year: { required: true, type: String },
  listPrice: { required: true, type: Number },
  colors: { required: true, type: Array },
  mileage: { required: true, type: Number },
  power: { required: true, type: Number },
  maxSpeed: { required: true, type: Number },
  image: { required: true, type: String },
});

const OEM_SpecsModel = mongoose.model("OEM_Spec", oemSpecsModelSchema);

module.exports = OEM_SpecsModel;
