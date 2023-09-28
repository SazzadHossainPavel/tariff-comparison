class BasicElectricityCost {
  constructor(consumption, baseCost, additionalKwhCost) {
    this.annualCost = baseCost * 12 + (consumption * additionalKwhCost) / 100;
  }
}

module.exports = BasicElectricityCost;
