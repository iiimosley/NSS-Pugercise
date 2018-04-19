"use strict";

const express = require("express");
const app = express();
let pastries = require('./lib/data/pastries');

app.set("view engine", "pug");

app.use(express.static(__dirname + "/public"));

console.log(pastries);

app.get("/", (req, res, next) => {
    res.render("index", {pastries});
});

app.get("/about", (req, res, next) => {
    res.render("about");
});

app.get("/inventory", (req, res, next) => {
    res.render("inventory");
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
