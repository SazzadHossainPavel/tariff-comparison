const BasicElectricityCost = require("./BasicElectricityCost");
const GasBill = require("../models/GasBill");
const PackagedElectricityCost = require("./PackagedElectricityCost");

class BillCalculator {
  static calculateAnnualCost(cost) {
    if (
      cost instanceof BasicElectricityCost ||
      cost instanceof PackagedElectricityCost
    ) {
      return cost.annualCost;
    } else if (cost instanceof GasBill) {
      return bill.cubicMeters * 0.05;
    }
  }
}

module.exports = BillCalculator;
