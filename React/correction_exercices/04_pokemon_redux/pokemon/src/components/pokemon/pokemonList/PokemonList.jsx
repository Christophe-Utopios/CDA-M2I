import PokemonCard from '../pokemonCard/PokemonCard'
import classes from './PokemonList.module.css'
import { useSelector } from 'react-redux'

const PokemonList = () => {
    const pokemons = useSelector(state => state.pokemons.pokemons)

    return (
        <div className={classes.cardContainer}>
            {
                pokemons.map((pokemon, key) => (
                    <PokemonCard pokemon={pokemon} key={key} index={pokemons.indexOf(pokemon) + 1} />
                ))
            }
        </div>
    );
}


export default PokemonList;