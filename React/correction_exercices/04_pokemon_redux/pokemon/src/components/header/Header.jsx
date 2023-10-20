import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { changeDisplayPokedex, clearPokedex } from "../pokemon/pokemonSlice";

const Header = () => {
    const pokedex = useSelector(state => state.pokemons.pokedex)
    const dispatch = useDispatch()

    return (  
        <header className={classes.header}>
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" 
            alt="logo-pokemon"
            className={classes.logoPokemon}
             />
            <Link className={classes.h1} to={"/"}>Home</Link>
            <h2 className={classes.h2}>Mon Pokedex</h2>
            <div>
                <div className="mt-3">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png"
                    alt="pokeball"  
                    className={classes.logoPokeball}
                    />
                    <span className="ms-2">{pokedex.length}</span>
                </div>
                <p>pokeball</p>
            </div>
            <button className="btn btn-danger" onClick={() => dispatch(clearPokedex())}>Clear</button>
            <button className="btn btn-primary" onClick={() => dispatch(changeDisplayPokedex())}>Show</button>
        </header>
    );
}
 
export default Header;