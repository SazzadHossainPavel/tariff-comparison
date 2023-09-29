const tariffs = require("../services/tariff-service");
const express = require("express");
const router = express.Router();
const BillFactory = require("../services/bill-factory");
const BillCalculator = require("../utils/bill-calculator");
const GasBill = require("../models/GasBill");

router.get("/", (req, res, next) => {
  GasBill.find()
    .then((bills) => {
      return res.json({
        success: true,
        bills,
      });
    })
    .catch(next);
});

router.post("/calculate", (req, res) => {
  const { cubicMeters } = req.body;

  if (typeof cubicMeters !== "number" || cubicMeters < 0) {
    return res.status(400).json({ error: "Invalid cubicMeters value" });
  }

  const calculatedTariffs = tariffs.map((tariff) => {
    const gasBill = BillFactory.createGasBill(cubicMeters, tariff);

    const annualCost = BillCalculator.calculateAnnualCost(gasBill) ?? 0;

    return {
      name: tariff.name,
      annualCost,
    };
  });

  GasBill.insertMany(calculatedTariffs)
    .then(() => {
      res.json({
        success: true,
        message: "Gas bill calculated and saved.",
      });
    })
    .catch(() => {
      res.status(500).json({
        error: "An error occurred while calculating the gas bill.",
      });
    });
});

module.exports = router;
