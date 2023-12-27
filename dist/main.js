/** @format */
const render = new Render();
const apiManager = new ApiManager();
let query = [];
let gif;

$("#searchButton").on("click", function () {
  query = [];
  const ingredient = $("#input").val();
  if (ingredient == "") {
    alert("Please add an ingredint!");
    return;
  }
  apiManager.getMeals(ingredient, "").then((data) => {
    $("#sensitivity").css("display", "inline");
    apiManager.getGif(ingredient).then((d) => {
      gif = d.data[0].url;
      render.appendMeals(data, gif);
    });
  });
});

$("#meals").on("click", ".img", function () {
  alert($(this).parent().find("li")[0].innerHTML);
});

$("#glutenFree").on("click", function () {
  const ingredient = $("#input").val();
  apiManager.getMeals(ingredient, "gluten").then((data) => {
    apiManager.getGif(ingredient).then((d) => {
      gif = d.data[0].url;
      render.appendMeals(data, gif);
    });
  });
});

$("#dairyFree").on("click", function () {
  const ingredient = $("#input").val();
  apiManager.getMeals(ingredient, "dairy").then((data) => {
    apiManager.getGif(ingredient).then((d) => {
      gif = d.data[0].url;
      render.appendMeals(data, gif);
    });
  });
});

$("#addIngredient").on("click", function () {
  const sensIngredient = $("#sensitivityInput").val();
  $("#sensitivityInput").val("");
  $("#sensitiveList").append(
    `<span data-id="${sensIngredient}">${sensIngredient}<button id="removeSensetiveIng">X</button></span>`
  );
  query.push(sensIngredient);
  console.log(query);
});

$("#sensitivityButton").on("click", function () {
  const ingredient = $("#input").val();
  apiManager.getSensitivesIngredientMeals(ingredient, query).then((data) => {
    apiManager.getGif(ingredient).then((d) => {
      gif = d.data[0].url;
      render.appendMeals(data, gif);
    });
  });
});

$("#search-container").on("click", "#removeSensetiveIng", function () {
  const ing = $(this).closest("span").data().id;
  const ingredient = $("#input").val();

  for (let i in query) {
    if (query[i] === ing) {
      query.splice(i, 1);
    }
  }
  $(this).closest("span").remove();
  if (query.length < 1) {
    apiManager.getMeals(ingredient, "").then((data) => {
      apiManager.getGif(ingredient).then((d) => {
        gif = d.data[0].url;
        render.appendMeals(data, gif);
      });
    });
  } else {
    const ingredient = $("#input").val();
    apiManager.getSensitivesIngredientMeals(ingredient, query).then((data) => {
      apiManager.getGif(ingredient).then((d) => {
        gif = d.data[0].url;
        render.appendMeals(data, gif);
      });
    });
  }
});
