import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

export const fetchPokemons = createAsyncThunk(
    "pokemon/fetchPokemons",
    async () => {
        const response = await fetch(BASE_URL + "?limit=300")
        const data = await response.json()
        return data.results
    }
)

export const fetchPokemon = createAsyncThunk(
    "pokemon/fetchPokemon",
    async (id) => {
        const response = await fetch(BASE_URL + `/${id}`)
        const data = await response.json()
        return data
    }
)

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemons: [],
        pokedex: [],
        displayPokedex: false
    },
    reducers: {
        addPokedex : (state, action) => {
            state.pokedex.push(action.payload)
        },
        changeDisplayPokedex: (state) => {
            state.displayPokedex = !state.displayPokedex
        },
        clearPokedex: (state) => {
            state.pokedex = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokemons.fulfilled, (state, action) => {
            state.pokemons = action.payload
        })
    }
})

export const {addPokedex, changeDisplayPokedex, clearPokedex} = pokemonSlice.actions
export default pokemonSlice.reducer