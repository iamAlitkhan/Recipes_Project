// // apikey = e8136732e53f44429c42e360cc271087;
// //apikey = 1bccf0f0630442eb81ba208dd39e5040;
// //id= 663136

let searchText = document.getElementById("searchText")
let searchButton = document.getElementById("searchButton")
let listDiv = document.getElementById("listDiv")
let recipePage = document.getElementById("recipePage")
let search = searchText.value

fetch(
  "https://api.spoonacular.com/recipes/random?number=50&apiKey=e8136732e53f44429c42e360cc271087"
)
  .then(function (response) {
    return response.json()
  })
  .then(function (total) {
    displayRecipe(total)
  })

searchText.addEventListener("keypress", function (event) {
  let search = searchText.value
  if (event.key === "Enter") {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=?${search}&number=40&addRecipeInformation=true&apiKey=1bccf0f0630442eb81ba208dd39e5040
    `
    )
      .then(function (response) {
        return response.json()
      })
      .then(function (total) {
        let recipesList = total.results.map(function (recipe) {
          return `
        <li class = "listLI">
      <img  class = "previewImage"src="${recipe.image}">
      <a href='#' id = "asdf"onclick="displayDetails('${recipe.id}')">${recipe.title}</a>
      <p> Servings:${recipe.servings}</p>
      <p> Ready in ${recipe.readyInMinutes} minutes</p>
      </li>`
        })
        listDiv.innerHTML = recipesList.join("")
      })
  }
})

function displayDetails(id) {
  fetch(
    `https://api.spoonacular.com/recipes/663136/ingredientWidget.json&apiKey=1bccf0f0630442eb81ba208dd39e5040
    `
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (total) {
      recipesList = `
      <li class = "listLI">
      <p>${total.title}</p>
    <p> Servings:${total.servings}</p>
    <p> Servings:${total.summary}</p>
    <p>{${total.analyzedInstructions}
    </li>`

      listDiv.innerHTML = recipesList
    })
}

function displayRecipe(total) {
  let randomRecipes = total.recipes.map(function (dishesRandom) {
    return `<li class ="listLI">
  <img class="previewImage"src =${dishesRandom.image}>
  <a href='#' id = "asdf"onclick="displayDetails('${dishesRandom.id}')">${dishesRandom.title}</a>
  <p> Servings ${dishesRandom.servings}</p>
  <p> Ready in ${dishesRandom.readyInMinutes}</p>
  </li>`
  })
  listDiv.innerHTML = randomRecipes.join("")
}
