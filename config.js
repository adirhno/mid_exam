/** @format */
const url =
  "https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/";
const dairyIngredients = [
  "Cream",
  "Cheese",
  "Milk",
  "Butter",
  "Creme",
  "Ricotta",
  "Mozzarella",
  "Custard",
  "Cream Cheese",
];
const sugar = ["peanuts butter", "Cheese", "Milk", "Butter"];
const glutenIngredients = ["flour", "bread", "spaghetti", "biscuits", "milk"];
const PORT = 2233;
const sensitivesArr = {
  dairy: dairyIngredients,
  gluten: glutenIngredients,
  sugar: sugar,
};

module.exports = { sensitivesArr, url, PORT };
