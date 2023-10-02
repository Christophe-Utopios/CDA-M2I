import { recipes } from "./data/recipes.js";
const recipesList = [];
for (const key in recipes) {
    recipesList.push(Object.assign({ id: key }, recipes[key]));
}
let filteredRecipesList = [];
let selectedPrepTime = 0;
let selectedCookTime = 0;
let selectedName = "";
let selectedIngredients = [];
let selectedRecipe;
const prepTimeInputEl = document.getElementById("filter-prepTime");
const cookTimeInputEl = document.getElementById("filter-cookTime");
const nameInputEl = document.getElementById("filter-name");
const ingredientsSelectEl = document.getElementById("filter-ingredients");
const detailsModal = document.getElementById("recipeDetailsModal");
const detailsCloseButton = document.getElementById("details-close");
const filterByPrepTime = (recipes) => {
    const filteredRecipes = [];
    recipes.forEach(recipe => {
        if (+recipe.prepTime.split(" ")[0] <= selectedPrepTime) {
            filteredRecipes.push(recipe);
        }
    });
    return filteredRecipes;
};
const getMaxPrepTime = () => {
    let maxValue = Number.MIN_VALUE;
    recipesList.forEach(recipe => {
        const currentPrepTime = +recipe.prepTime.split(" ")[0];
        maxValue = currentPrepTime > maxValue ? currentPrepTime : maxValue;
    });
    return maxValue;
};
prepTimeInputEl.addEventListener('input', () => {
    selectedPrepTime = +prepTimeInputEl.value;
    document.getElementById("filter-prepTime-indicator").textContent = prepTimeInputEl.value;
    refreshFilteredRecipes();
});
const filterByCookTime = (recipes) => {
    const filteredRecipes = [];
    recipes.forEach(recipe => {
        if (+recipe.cookTime.split(" ")[0] <= selectedCookTime) {
            filteredRecipes.push(recipe);
        }
    });
    return filteredRecipes;
};
const getMaxCookTime = () => {
    let maxValue = Number.MIN_VALUE;
    recipesList.forEach(recipe => {
        const currentCookTime = +recipe.cookTime.split(" ")[0];
        maxValue = currentCookTime > maxValue ? currentCookTime : maxValue;
    });
    return maxValue;
};
cookTimeInputEl.addEventListener('input', () => {
    selectedCookTime = +cookTimeInputEl.value;
    document.getElementById("filter-cookTime-indicator").textContent = cookTimeInputEl.value;
    refreshFilteredRecipes();
});
const filterByName = (recipes) => {
    return recipes.filter(recipe => recipe.name.toUpperCase().startsWith(selectedName.toUpperCase()));
};
nameInputEl.addEventListener('input', () => {
    selectedName = nameInputEl.value;
    refreshFilteredRecipes();
});
const filterByIngredients = (recipes) => {
    return recipes.filter((recipe) => {
        return selectedIngredients.every(ingredient => {
            return recipe.ingredients.some(recipeIngredient => {
                return recipeIngredient.name === ingredient;
            });
        });
    });
};
ingredientsSelectEl.addEventListener('change', (e) => {
    selectedIngredients = [];
    for (const opt of ingredientsSelectEl.options) {
        if (opt.selected) {
            selectedIngredients.push(opt.value);
        }
    }
    refreshFilteredRecipes();
});
const refreshFilteredRecipes = () => {
    filteredRecipesList = filterByPrepTime(recipesList);
    filteredRecipesList = filterByCookTime(filteredRecipesList);
    filteredRecipesList = filterByName(filteredRecipesList);
    filteredRecipesList = filterByIngredients(filteredRecipesList);
    const recipesContainerEl = document.getElementById("recipesContainer");
    recipesContainerEl.innerHTML = "";
    filteredRecipesList.forEach(recipe => {
        const newDiv = document.createElement('button');
        newDiv.className = "btn btn-outline-light p-4 my-2";
        newDiv.innerHTML = `
        <h3 class="text-center">${recipe.name}</h3>
        <hr>
        <div class="row g-3">
          <div class="col-6 d-flex justify-content-center align-items-center">
            <img class="invert-100" src="./assets/img/chef-hat.svg" alt="Chef Hat SVG">
            <span>${recipe.prepTime}</span>
          </div>
          <div class="col-6 d-flex justify-content-center align-items-center">
            <img class="invert-100" src="./assets/img/fire.svg" alt="Fire SVG">
            <span>${recipe.cookTime}</span>
          </div>
        </div>
    `;
        newDiv.addEventListener('click', () => {
            selectedRecipe = recipe;
            showDetailsOfRecipe();
        });
        recipesContainerEl.appendChild(newDiv);
    });
};
const refreshIngredientsSelect = () => {
    const ingredientsList = [];
    recipesList.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            if (!ingredientsList.find(x => x === ingredient.name)) {
                ingredientsList.push(ingredient.name);
            }
        });
    });
    ingredientsSelectEl.innerHTML = "";
    ingredientsList
        .sort()
        .forEach(ingredient => {
        const newOption = document.createElement('option');
        newOption.textContent = ingredient.substring(0, 1).toUpperCase() + ingredient.substring(1).toLowerCase();
        newOption.value = ingredient;
        ingredientsSelectEl.appendChild(newOption);
    });
};
const initDatas = () => {
    prepTimeInputEl.max = getMaxPrepTime().toString();
    selectedPrepTime = +prepTimeInputEl.max;
    prepTimeInputEl.value = selectedPrepTime.toString();
    document.getElementById("filter-prepTime-indicator").textContent = prepTimeInputEl.value;
    cookTimeInputEl.max = getMaxCookTime().toString();
    selectedCookTime = +cookTimeInputEl.max;
    cookTimeInputEl.value = selectedCookTime.toString();
    document.getElementById("filter-cookTime-indicator").textContent = cookTimeInputEl.value;
    refreshIngredientsSelect();
    refreshFilteredRecipes();
};
const showDetailsOfRecipe = () => {
    detailsModal.style.display = "block";
    document.getElementById("details-prepTime").textContent = selectedRecipe.prepTime;
    document.getElementById("details-cookTime").textContent = selectedRecipe.cookTime;
    document.getElementById("details-servings").textContent = `${selectedRecipe.servings} servings`;
    document.getElementById("details-ingredients").innerHTML = "";
    selectedRecipe.ingredients.forEach(ingredient => {
        const newLItem = document.createElement('li');
        newLItem.textContent = `${ingredient.name.substring(0, 1).toUpperCase() + ingredient.name.substring(1).toLowerCase()} (${ingredient.amount})`;
        document.getElementById("details-ingredients").appendChild(newLItem);
    });
    document.getElementById("details-name").textContent = selectedRecipe.name;
    document.getElementById("details-instructions").innerHTML = "";
    selectedRecipe.instructions.forEach(instruction => {
        const newLItem = document.createElement('li');
        newLItem.textContent = instruction;
        document.getElementById("details-instructions").appendChild(newLItem);
    });
};
window.addEventListener('click', (e) => {
    if (e.target === detailsModal) {
        detailsModal.style.display = "none";
    }
});
detailsCloseButton.addEventListener('click', () => {
    detailsModal.style.display = "none";
});
initDatas();
