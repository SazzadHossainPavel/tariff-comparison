const mongoose = require("mongoose");

const gasBillSchema = new mongoose.Schema({
  name: String,
  annualCost: Number,
});

module.exports = mongoose.model("GasBill", gasBillSchema);
