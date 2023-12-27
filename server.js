/** @format */

const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const { url, PORT } = require("./config");
const mailtoLink = require("mailto-link");
const RecipesUltities = require("./dist/recipesUtilites");

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "dist/pages")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/check", (req, res) => {
  res.send("welcome to your server!");
});

app.get("/page1", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/pages/page1.html"));
});
app.get("/page2", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/pages/page1.html"));
});
app.get("/page3", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/pages/page1.html"));
});
app.get("/page4", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/pages/page1.html"));
});
app.get("/page5", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/pages/page1.html"));
});

app.get("/recipes/:ingredient/:sensitive?", (req, res) => {
  axios.get(url + req.params.ingredient).then((data) => {
    if (req.params.sensitive) {
      res.send(
        RecipesUltities.isContainIngredient(
          req.params.sensitive,
          data.data.results
        )
      );
    } else {
      res.send(RecipesUltities.filterData(data.data.results));
    }
  });
});

app.get("/recipes/specifices/:ingredient/:sensitivity", (req, res) => {
  const sensitiveIngredients = req.params.sensitivity;
  console.log(sensitiveIngredients);
  axios.get(url + req.params.ingredient).then((data) => {
    res.send(
      RecipesUltities.specSensitiveIngredient(
        RecipesUltities.filterData(data.data.results),
        sensitiveIngredients
      )
    );
  });
});

app.listen(PORT, () => {
  console.log("this server is listening to port " + PORT);
});
