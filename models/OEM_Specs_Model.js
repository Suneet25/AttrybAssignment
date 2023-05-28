// let mongoose = require("mongoose");

// //this is the oem Specifications model Schema which states that all the keys of oem Specifications document will not more than
// //thsese given keys and of specific types mentioned also

// let OEM_SpecsSchema = new mongoose.Schema({
//   model: {
//     type: String,
//     required: true,
//   },
//   year: {
//     type: Number,
//     required: true,
//   },
//   listPrice: {
//     type: Number,
//     required: true,
//   },
//   colors: { type: Array, required: true },
//   mileage: {
//     type: Number,
//     required: true,
//   },
//   power: {
//     type: Number,
//     required: true,
//   },
//   maxSpeed: {
//     type: Number,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
// });

// let OEM_SpecsModel = mongoose.model("OEM_Spec", OEM_SpecsSchema);

// module.exports = OEM_SpecsModel;
const mongoose = require("mongoose");

//this is the oem Specifications model Schema which states that all the keys of oem Specifications document will not more than
//thsese given keys and of specific types mentioned also

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
