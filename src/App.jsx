import React, { useState } from 'react'
import './App.css'
import { PokemonForm, PokemonList } from './components'

const App = () => {
  const [pokemon, setPokemon] = useState([])
  

  return (
    <>
      <header>Find out pokemon abilities</header>
      <PokemonForm pokemon={pokemon} setPokemon={setPokemon} />

      <PokemonList  pokemon={pokemon} setPokemon={setPokemon} />
    </>
  )
 
}

export default App