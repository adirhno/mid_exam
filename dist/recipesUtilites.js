/** @format */

const { sensitivesArr } = require("../config");
const faker = require("faker");

class RecipesUltities {
  static filterData = function (results) {
    let newArr = [];
    results.forEach((m) => {
      let meal = {
        id: m.idMeal,
        starts: Math.floor(Math.random() * 6),
        chef: faker.name.findName(),
        ingredients: m.ingredients,
        title: m.title,
        thumbnail: m.thumbnail,
        href: m.href,
      };
      newArr.push(meal);
    });
    return newArr;
  };

  static filterSensitivity = function (meals, sensetiveIngredient) {
    let newMeals = [];
    newMeals = meals.filter((m) => {
      return !m.ingredients.find((ingredient) => {
        return sensitivesArr[sensetiveIngredient].includes(ingredient);
      });
    });
    return newMeals;
  };

  static specSensitiveIngredient = function (meals, sensitiveIngredient) {
    let newMeals = meals;
    let newMeals2 = [];
    let sensitivesArr = [];

    sensitivesArr = sensitiveIngredient.split(",");
    for (let i = 0; i < sensitivesArr.length; i++) {
      newMeals2 = newMeals.filter((m) => {
        return !m.ingredients.find(
          (ingredient) =>
            sensitivesArr[i].toLowerCase() === ingredient.toLowerCase()
        );
      });
      newMeals = newMeals2;
    }
    return newMeals2;
  };

  static isContainIngredient = function (sensetiveIngredient, meals) {
    if (sensitivesArr[sensetiveIngredient]) {
      return this.filterSensitivity(
        this.filterData(meals),
        sensetiveIngredient
      );
    }
  };

  static filterMultiSensetiveIngredients = function (ingredientsArr) {
    for (let i in ingredientsArr) {
      filterSensitivity(ingredientsArr[i]);
    }
  };
}
module.exports = RecipesUltities;
