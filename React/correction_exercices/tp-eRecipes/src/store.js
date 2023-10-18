import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/auth/authSlice";
import recipesSlice from "./components/recipes/recipesSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        recipes: recipesSlice
    }
})

export default store