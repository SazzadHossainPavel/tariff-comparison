class PackagedElectricityCost {
  constructor(consumption, baseCost, additionalKwhCost, includedKwh) {
    this.annualCost =
      consumption <= includedKwh
        ? baseCost
        : baseCost + ((consumption - includedKwh) * additionalKwhCost) / 100;
  }
}

module.exports = PackagedElectricityCost;
