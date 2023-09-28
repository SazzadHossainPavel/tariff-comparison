const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../external-tariff-provider.json");

// Function to read the JSON file
function readTariffsFromFile() {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (err) {
    console.error("Error reading tariff-provider.json:", err);
    return [];
  }
}

// Load tariffs from the JSON file
const tariffs = readTariffsFromFile();

module.exports = tariffs;
