const express = require("express");
const app = express();
const port = 5000;

let myLogger = function (req, res, next) {
  console.log("LOGGED");
  console.log("Requested Url: ", req.url);
  console.log("Method : ", req.method);
  console.log("Beginning time : ", Date(Date.now()).toString());
  next();
};
app.use(myLogger);

app.use(express.static("static")); // the static files (html,css,js,images) which belongs to the app, will be storing here
// You can find the image: http://localhost:5000/images/foto.jpg

app.get("/", (req, res) => {
  res.status(200).send("Main Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.get("/contact", (req, res) => {
  res.status(200).send("Contact Page");
});

app.get("*", (req, res) => {
  // If there is a route other than the above Routes, we said return here.
  res.status(404).send("No such a Page");
});

app.listen(port);
