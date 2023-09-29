const mongoose = require("mongoose");

const isProduction = process.env.NODE_ENV === "production";

const connectDB = async () => {
  try {
    const mongoUrl = isProduction
      ? process.env.MONGO_PROD_URI
      : process.env.MONGO_URI;

    const conn = await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
