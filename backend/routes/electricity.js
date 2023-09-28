const tariffs = require("../services/tariff-service");
const express = require("express");
const router = express.Router();
const BillFactory = require("../services/bill-factory");
const BillCalculator = require("../utils/bill-calculator");
const ElectricityBill = require("../models/ElectricityBill");

router.get("/", (req, res, next) => {
  ElectricityBill.find()
    .then((bills) => {
      return res.json({
        success: true,
        bills,
      });
    })
    .catch(next);
});

router.post("/calculate", (req, res) => {
  const { consumption } = req.body;

  if (typeof consumption !== "number" || consumption < 0) {
    return res.status(400).json({ error: "Invalid consumption value" });
  }

  const calculatedTariffs = tariffs.map((tariff) => {
    const electricityBill = BillFactory.createElectricityBill(
      consumption,
      tariff
    );

    const annualCost = BillCalculator.calculateAnnualCost(electricityBill) ?? 0;

    return {
      name: tariff.name,
      annualCost,
    };
  });

  ElectricityBill.insertMany(calculatedTariffs)
    .then(() => {
      res.json({
        success: true,
        message: "Electricity bill calculated and saved.",
      });
    })
    .catch(() => {
      res.status(500).json({
        error: "An error occurred while calculating the electricity bill.",
      });
    });
});

module.exports = router;
