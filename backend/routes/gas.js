// controllers/gasController.js
const express = require("express");
const router = express.Router();
const BillFactory = require("../services/bill-factory");
const BillCalculator = require("../utils/bill-calculator");
const GasBill = require("../models/GasBill");

router.post("/calculate", (req, res) => {
  try {
    const { cubicMeters } = req.body;
    const gasBill = BillFactory.createGasBill(cubicMeters);

    const billCalculator = new BillCalculator();
    const baseBill = billCalculator.calculateBaseBill(gasBill);
    const finedBill = billCalculator.calculateFinedBill(gasBill);

    const newGasBill = new GasBill({
      cubicMeters,
      baseBill,
      finedBill,
    });

    newGasBill.save();

    res.json({ message: "Gas bill calculated and saved." });
  } catch (err) {
    res
      .status(500)
      .json({ error: "An error occurred while calculating the gas bill." });
  }
});

module.exports = router;
