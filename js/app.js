// apikey = e8136732e53f44429c42e360cc271087;
let searchText = document.getElementById("searchText")
let searchButton = document.getElementById("searchButton")
let listUL = document.getElementById("listUL")

searchButton.addEventListener("click", function () {
  search = searchText.value
  fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=?${search}&addRecipeInformation=true&apiKey=e8136732e53f44429c42e360cc271087`
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (total) {
      let recipesList = total.results.map(function (recipe) {
        return `<li>
      <p>${recipe.title}</p>
      <img src="${recipe.image}">
      <p>${recipe.summary}
      </li>`
      })
      listUL.innerHTML = recipesList
    })
})
