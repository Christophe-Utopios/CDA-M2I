import { fetchPokemon } from "../pokemonSlice";
import classes from './PokemonCard.module.css'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const PokemonCard = (props) => {
    const dispatch = useDispatch();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(fetchPokemon(props.index));
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
                <Link to={"/pokemon/" + props.index} className={classes.card}>
                    <img src={pokemon.sprites.front_default} alt="pokemon_img" />
                    <h5>#{props.index}</h5>
                    <h1>{props.pokemon.name}</h1>
                </Link>
            }
        </>
    );
}

export default PokemonCard;