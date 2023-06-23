const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// const categories = require("./data/categories.json");
const recipe = require("./data/data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Recipe is running");
});



app.get("/recipe", (req, res) => {
  res.send(recipe);
});

app.get("/recipe/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const selectedRecipe = recipe.find((n) => n.id === id);
  res.send(selectedRecipe);
});

app.listen(port, () => {
  console.log(`Recipe API is running on port: ${port}`);
});
