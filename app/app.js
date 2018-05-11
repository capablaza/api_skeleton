var express = require("express");
var path = require("path");
var body_parser = require("body-parser");

var apiroutes = require("./api/apiRoutes");

var app = express();

app.use(body_parser.urlencoded({ extended: true }));

app.use(express.json());

app.use(function(req, res, next) {
  req.headers["if-none-match"] = "no-match-for-this";
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api/demoapp", apiroutes);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err;//req.app.post("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: err.message, error: err });
});

module.exports = app;
