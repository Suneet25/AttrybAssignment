let mongoose = require("mongoose");

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
  image: [
    {
      url: { type: String },
    },
  ],
  title: { type: String },
  description: { type: String },

  kmOnOdometer: {
    type: Number,
  },
  majorScratches: {
    type: Boolean,
  },
  originalPaint: {
    type: Boolean,
  },
  accidentsReported: {
    type: Number,
  },
  previousBuyers: {
    type: Number,
  },
  registrationPlace: {
    type: String,
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
