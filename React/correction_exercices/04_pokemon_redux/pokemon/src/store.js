import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./components/pokemon/pokemonSlice.js"

export default configureStore({
    reducer: {
        pokemons: pokemonReducer
    }
})