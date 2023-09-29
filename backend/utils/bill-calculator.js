const BasicElectricityCost = require("./BasicElectricityCost");
const GasBill = require("../models/GasBill");
const PackagedElectricityCost = require("./PackagedElectricityCost");
const BasicGasCost = require("./BasicGasCost");

class BillCalculator {
  static calculateAnnualCost(cost) {
    if (
      cost instanceof BasicElectricityCost ||
      cost instanceof PackagedElectricityCost
    ) {
      return cost.annualCost;
    } else if (cost instanceof BasicGasCost) {
      // can calculate for gas also
      return cost.monthlyCost;
    }
  }

  static calculateAnnualCostWithFine(cost) {
    // implement logic with fine
  }
}

module.exports = BillCalculator;
