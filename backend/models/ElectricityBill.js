const mongoose = require("mongoose");

const electricityBillSchema = new mongoose.Schema({
  name: String,
  annualCost: Number,
});

module.exports = mongoose.model("ElectricityBill", electricityBillSchema);
