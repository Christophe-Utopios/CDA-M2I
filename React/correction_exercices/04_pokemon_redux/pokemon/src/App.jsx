import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Modal from './components/modal/Modal'
import { useEffect } from 'react'
import { fetchPokemons } from './components/pokemon/pokemonSlice'
import PokedexDisplay from './components/pokemon/pokedexDisplay/PokedexDisplay'

function App() {
  const displayPokedex = useSelector(state => state.pokemons.displayPokedex)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemons())
  }, [])

  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        {displayPokedex && <Modal><PokedexDisplay/></Modal>}
        <Outlet/>
      </main>
      
    </>
  )
}

export default App
