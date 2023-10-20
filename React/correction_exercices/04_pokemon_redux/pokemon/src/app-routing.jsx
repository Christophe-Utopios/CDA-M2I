import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import PokemonList from "./components/pokemon/pokemonList/PokemonList"
import PokemonDisplay from "./components/pokemon/pokemonDisplay/PokemonDisplay"

const router = createBrowserRouter([
    {path :"/",
    element : <App />,
    children: [
        {
            path :"/",
            element : <PokemonList />
        },
        {
            path :"/pokemon/:id",
            element : <PokemonDisplay />
        }
    ]},
])


export default router