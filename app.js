var express = require("express");
var path = require("path");
var morgan = require("morgan");

var app = express();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms"),
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.static(path.join(__dirname, "public"), {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.set("Content-Type", "application/javascript");
      }
    },
  }),
);
module.exports = app;
