// apikey = e8136732e53f44429c42e360cc271087;
//apikey = 1bccf0f0630442eb81ba208dd39e5040;

let searchText = document.getElementById("searchText")
let searchButton = document.getElementById("searchButton")
let listDiv = document.getElementById("listDiv")

searchButton.addEventListener("click", function () {
  search = searchText.value
  fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=?${search}&addRecipeInformation=true&addRecipeNutrition=true&apiKey=1bccf0f0630442eb81ba208dd39e5040
    `
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (total) {
      let recipesList = total.results.map(function (recipe) {
        return `<li class = "listLI">
      <img  class = "previewImage"src="${recipe.image}">
      <h2>${recipe.title}</h2>
      <p> Servings:${recipe.servings}</p>
      <p> Duration: ${recipe.readyInMinutes} minutes</p>
      </li>`
      })
      listDiv.innerHTML = recipesList.join("")
    })
})
