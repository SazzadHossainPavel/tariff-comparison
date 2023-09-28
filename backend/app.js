const path = require("path"),
  express = require("express"),
  bodyParser = require("body-parser"),
  session = require("express-session"),
  cors = require("cors"),
  errorhandler = require("errorhandler"),
  dotenv = require("dotenv"),
  mongoose = require("mongoose"),
  connectDB = require("./config/db"),
  MongoStore = require("connect-mongo"),
  morgan = require("morgan");

require("./models/ElectricityBill");
require("./models/GasBill");

const isProduction = process.env.NODE_ENV === "production";

dotenv.config({ path: "./config/config.env" });

mongoose.set("strictQuery", false);
connectDB();

const app = express();

if (!isProduction) {
  app.use(morgan("dev"));
}

if (!isProduction) {
  app.use(errorhandler());
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);

app.use("/api", require("./routes"));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

if (!isProduction) {
  app.use(function (err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, function () {
  console.log("Listening on port " + server.address().port);
});
