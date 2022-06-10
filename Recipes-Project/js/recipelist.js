let search = sessionStorage.getItem("getSearch")
let searchText = document.getElementById("searchText")
let searchButton = document.getElementById("searchButton")
let listDiv = document.getElementById("listDiv")
let stepsDiv = document.getElementById("stepsDiv")
let ingredientsDiv = document.getElementById("ingredientsDiv")
let recipeDetailsDiv = document.getElementById("recipeDetailsDiv")
let recipeImageDiv = document.getElementById("recipeImageDiv")
let nutrientsDiv = document.getElementById("nutrientsDiv")

fetch(
  `https://api.spoonacular.com/recipes/complexSearch?query=${search}&number=40&addRecipeInformation=true&instructionsRequired=true&apiKey=94d68b07dbfb46ecaf82249772b534c5
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
    <a href='recipe.html' onclick ="sessionStorage.setItem('getID',${recipe.id})">${recipe.title}</a>
    <p class = "previewDetails"> Likes: ${recipe.aggregateLikes}</p>
    
    </li>`
    })

    listDiv.innerHTML = recipesList.join("")
    sessionStorage.removeItem("getSearch")
  })

searchButton.addEventListener("click", function () {
  sessionStorage.removeItem("getID")
  let search = searchText.value
  sessionStorage.setItem("getSearch", search)
  window.document.location = "recipelist.html"
})
