/** @format */

class ApiManager {
  constructor() {}

  getMeals(ingredient, sensetiviteIngredient) {
    return $.get(`/recipes/${ingredient}/${sensetiviteIngredient}`);
  }

  getSensitivesIngredientMeals(ingredient, query) {
    return $.get(`/recipes/specifices/${ingredient}/${query}`);
  }

  getGif(food) {
    return $.get(
      `http://api.giphy.com/v1/gifs/search?q=${food}&api_key=v6NP6FvMrt7gnBBQUXpQs7Q0Uyejg8Rl&limit=1&embedded=true`
    );
  }
}
