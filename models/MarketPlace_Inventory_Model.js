let mongoose = require("mongoose");

//this is the inventory model Schema which states that all the keys of inventory document will not more than
//thsese given keys and of specific types mentioned also

let marketPlaceTnventoryModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  oemSpecs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OEM_Spec",
    required: true,
  },
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },

  kmOnOdometer: {
    type: Number,
    required: true,
  },
  majorScratches: {
    type: String,
    required: true,
  },
  originalPaint: {
    type: String,
    required: true,
  },
  accidentsReported: {
    type: Number,
    required: true,
  },
  previousBuyers: {
    type: Number,
    required: true,
  },
  registrationPlace: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const MarketPlaceInventoryModel = mongoose.model(
  "Marketplace_Inventory",
  marketPlaceTnventoryModel
);

module.exports = MarketPlaceInventoryModel;
