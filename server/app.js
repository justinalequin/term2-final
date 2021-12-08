var createError = require("http-errors");
var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config;

var indexRouter = require("./routes/index");
var app = express();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("MONGODB CONNECT");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/", indexRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.json({ message: "error", err: err.message });
});

module.exports = app;
