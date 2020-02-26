const chalk = require("chalk");
const cmd = require("node-cmd");
var express = require("express"),
  app = express(),
  port = 1500,
  bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require("./routes"); //importing route
routes(app); //register the route
app.listen(port);

console.log(chalk.red("Server Running on: " + port));
