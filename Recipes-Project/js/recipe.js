let searchText = document.getElementById("searchText")
let searchButton = document.getElementById("searchButton")
let listDiv = document.getElementById("listDiv")
let stepsUL = document.getElementById("stepsUL")
let ingredientsUL = document.getElementById("ingredientsUL")
let recipeDetailsDiv = document.getElementById("recipeDetailsDiv")
let recipeImageDiv = document.getElementById("recipeImageDiv")
let nutrientsUL = document.getElementById("nutrientsUL")

let id = sessionStorage.getItem("getID")

fetch(
  `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&instructionsRequired=true&apiKey=94d68b07dbfb46ecaf82249772b534c5
      `
)
  .then(function (response) {
    return response.json()
  })
  .then(function (total) {
    recipeImage = `<img class = "recipeImage"src ="${total.image}"></img>`
    recipesList = `
        <h3 class =recipeDetailsText>${total.title}</h3>
        <p class = recipeDetailsText> Servings:${total.servings}</p>
        <p class = recipeDetailsText>${total.summary}</p>

        `
    let recipeSteps = total.analyzedInstructions[0].steps.map(function (list) {
      return `<li class ="stepsLI">
        <h5 class="stepNumber">${list.number}</h5>
        <p>${list.step}</p>
        </li>`
    })
    let recipeIngredients = total.extendedIngredients.map(function (
      ingredient
    ) {
      return `<li class ="ingredientLI">
           ${ingredient.original}
            </li>`
    })
    let recipeNutrients = total.nutrition.nutrients.map(function (nutrient) {
      return `<li class ="nutrientLI">
            <p> ${nutrient.name}</p>
          <p class ="nutrientText"> ${nutrient.amount} ${nutrient.unit}</p>
          </li>
          `
    })
    stepsUL.innerHTML = recipeSteps.join("")
    ingredientsUL.innerHTML = recipeIngredients.join("")
    nutrientsUL.innerHTML = recipeNutrients.join("")
    recipeImageDiv.innerHTML = recipeImage
    recipeDetailsDiv.innerHTML = recipesList
  })

searchButton.addEventListener("click", function () {
  sessionStorage.removeItem("getID")
  let search = searchText.value
  sessionStorage.setItem("getSearch", search)
  window.document.location = "recipelist.html"
})
