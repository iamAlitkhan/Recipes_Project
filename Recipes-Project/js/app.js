// // &apiKey = e8136732e53f44429c42e360cc271087;
// // &apiKey = 1bccf0f0630442eb81ba208dd39e5040;
// // &apiKey = c4080d70d3b44d10b7ae5ad3c75eac80
// // &apiKey = 0404acd02b6745479df9c27706db69ea
// // &apiKey = dfe9fac191164f7499688809136d862a
// // &apiKey = 0b66eb7c7e364d3c9d64e3d8b6a9cd23
// //id= 663136
// // &apiKey = 3d38b8ac3e4b414284c19a46b1543f5e
// // apikey = 94d68b07dbfb46ecaf82249772b534c5

let searchText = document.getElementById("searchText")
let searchButton = document.getElementById("searchButton")
let listDiv = document.getElementById("listDiv")
let stepsDiv = document.getElementById("stepsDiv")
let ingredientsDiv = document.getElementById("ingredientsDiv")
let recipeDetailsDiv = document.getElementById("recipeDetailsDiv")
let recipeImageDiv = document.getElementById("recipeImageDiv")
let nutrientsDiv = document.getElementById("nutrientsDiv")
let previewImage = document.getElementById("previewImage")
sessionStorage.clear()
fetch(
  "https://api.spoonacular.com/recipes/random?number=12&instructionsRequired=true&apiKey=94d68b07dbfb46ecaf82249772b534c5"
)
  .then(function (response) {
    return response.json()
  })
  .then(function (total) {
    displayRecipe(total)
  })

searchButton.addEventListener("click", function () {
  let search = searchText.value
  sessionStorage.setItem("getSearch", search)
  window.document.location = "recipelist.html"
})

function displayRecipe(total) {
  let randomRecipes = total.recipes.map(function (dishesRandom) {
    return `<li class ="listLI">
  <img  id="previewImage"class="previewImage"src =${dishesRandom.image}>
  <a href="recipe.html" onclick = "sessionStorage.setItem('getID',${dishesRandom.id})">${dishesRandom.title}</a>
  <p class = "previewDetails"> Likes: ${dishesRandom.aggregateLikes}</p>
  </li>`
  })

  listDiv.innerHTML = randomRecipes.join("")
}
