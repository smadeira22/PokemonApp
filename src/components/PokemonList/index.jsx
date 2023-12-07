import React, { useState } from 'react'
import PokemonItem from '../PokemonItem'

const PokemonList = (props) => {

  return (
    <div className="pokemon-container">
    <ul className="pokemon-list">
        {props.pokemon.map((pokemon, idx) => {
            return <PokemonItem key={idx} pokemon={pokemon}/>
        })}
    </ul>
</div>

  )
}

export default PokemonList