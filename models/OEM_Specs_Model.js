let express = require("express");
let mongoose = require("mongoose");

let OEM_SpecsSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  listPrice: {
    type: Number,
    required: true,
  },
  colors: [String],
  mileage: {
    type: Number,
    required: true,
  },
  power: {
    type: Number,
    required: true,
  },
  maxSpeed: {
    type: Number,
    required: true,
  },
});


let OEM_SpecsModel=mongoose.model("OEM_Spec",OEM_SpecsSchema);

module.exports=OEM_SpecsModel;