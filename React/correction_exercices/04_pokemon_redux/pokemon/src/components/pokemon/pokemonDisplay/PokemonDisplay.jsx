import { useDispatch } from 'react-redux'
import classes from "./PokemonDisplay.module.css"
import { addPokedex, fetchPokemon } from '../pokemonSlice'
import { useEffect, useState} from 'react'
import { useParams} from "react-router-dom";

const PokemonDisplay = () => {
    const id = useParams()
    const dispatch = useDispatch();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(fetchPokemon(id.id));
                setPokemon(response.payload)
            } catch (error) {
                console.error("Une erreur s'est produite :", error);
            }
        };

        fetchData();
    }, []);

    return (  
        <>
            {
                pokemon && 
                <div className={classes.container}>
                    <div className={classes.pokemon}>
                        <div className={classes.pokemonInfos}>
                            <h1>{pokemon.name}</h1>
                            <img src={pokemon.sprites.front_default} alt="pokemon" className={classes.pokemonImg} />
                            <button className='btn btn-success' onClick={() => dispatch(addPokedex(pokemon))}>Ajouter au pokedex</button>
                        </div>
                        <div className={classes.stats}>
                            <h1>HEIGHT</h1>
                            <p>{pokemon.height}</p>
                            <h1>weight</h1>
                            <p>{pokemon.weight}</p>
                            <h1>XP</h1>
                            <p>{pokemon.base_experience}</p>
                            <h1>ABILITIES</h1>
                            {pokemon.abilities.map((ability, key) => {
                                return <span className={classes.abilities} key={key}>{ability.ability.name}</span>;
                            })}
                            <h1>TYPE</h1>
                            {pokemon.types.map((type, key) => {
                                return <span className={classes.type} key={key}>{type.type.name}</span>;
                            })}
                        </div>
                    </div>
                        <div className={classes.moves}>
                            <h1>MOVES</h1>
                            {pokemon.moves.map((move, key) => {
                            return <span className={classes.move} key={key}>{move.move.name}</span>;
                            })}
                        </div>
                </div>
                
            }
        </>
    );
}
 
export default PokemonDisplay;