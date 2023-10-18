import {createSlice} from "@reduxjs/toolkit"
import { ingredients } from "./ingredients"

const recipeSlice = createSlice({
    name: "recipes",
    initialState: {
        formMode: "",
        recipes: [],
        selectedRecipe: null,
        ingredients: [...ingredients],
        isLoading: false,
        error: null
    },
    reducers: {
        setFormMode:(state, action) => {
            state.formMode = action.payload
        },
        setRecipes: (state, action) => {
            state.recipes = action.payload
        },
        setSelectedRecipe: (state, action) => {
            state.selectedRecipe = action.payload
        },
        addRecipe: (state, action) => {
            state.recipes.push(action.payload)
        },
        editRecipe: (state, action) => {
            let foundRecipe = state.recipes.find(recipe => recipe.id === action.payload.id)
            console.log(foundRecipe);
            if (foundRecipe) {
                state.recipes = [...state.recipes.filter(r => r.id !== action.payload.id), action.payload]
            }
        },
        deleteRecipe: (state, action) => {
            let foundRecipe = state.recipes.find(recipe => recipe.id === action.payload.id)
            if (foundRecipe) {
                state.recipes = state.recipes.filter(r => r.id !== action.payload.id)
            }
        }
    }
})

export const {setFormMode, setRecipes, setSelectedRecipe, addRecipe, editRecipe, deleteRecipe} = recipeSlice.actions
export default recipeSlice.reducer