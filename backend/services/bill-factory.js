const GasBill = require("../models/GasBill");
const tariffType = require("../interfaces/tariff-types");
const BasicElectricityCost = require("../utils/BasicElectricityCost");
const PackagedElectricityCost = require("../utils/PackagedElectricityCost");

class BillFactory {
  static createElectricityBill(consumption, tariff) {
    if (tariff.type === tariffType.BASIC) {
      return new BasicElectricityCost(
        consumption,
        tariff.baseCost,
        tariff.additionalKwhCost
      );
    } else if (tariff.type === tariffType.PACKAGED) {
      return new PackagedElectricityCost(
        consumption,
        tariff.baseCost,
        tariff.additionalKwhCost,
        tariff.includedKwh
      );
    }
  }

  static createGasBill(cubicMeters, tariff) {
    return new GasBill(cubicMeters, tariff);
  }
}

module.exports = BillFactory;
