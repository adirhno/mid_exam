/** @format */

class Render {
  constructor() {}
  appendMeals = function (meals, gif) {
    // for (let j = 1; j < 7; j++) {
    $("#meals").html("");
    for (let i = 0; i < meals.length; i++) {
      let meal = `<div class="col-sm-11 meal" ><a class="title">${meals[i].title}</a><div class='chef'><strong>Chef: </strong>${meals[i].chef}<span class="stars">Stars:${meals[i].starts}</span></div><div class="img"><iframe src="${gif}/"></iframe></div>
              <div class="ingredients">Ingredients:<ul id="ing${i}" class="ingredient"></ul></div><button class="emailUsBtn"><a href="mailto:?subject=Check%20out%20this%20recipe!${meals[i].title}%20&body=%20You%20can%20see%20the%20recipe%20in%20this%20video%20%3A ${meals[i].href}">Email Us</a></button></div> `;

      $(`#meals`).append(meal);
      this.addIngredients(meals[i].ingredients, i);
    }
    // }
  };

  addIngredients = function (ingredients, b) {
    for (let i = 0; i < ingredients.length; i++) {
      $(`#ing${b}`).append(`<li>${ingredients[i]}</li>`);
    }
  };
}
