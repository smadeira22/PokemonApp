import React, { useState, useEffect } from 'react'
import Error from '../Error';

const PokemonItem = ({ pokemon }) => {
  /*const { name } = useParams()*/

  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  async function getData() {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.text}`
      const response = await fetch(url)
      const data = await response.json()
      setData(data.abilities)
    } catch (error) {  
      setError(error.message)
    }
 
  }
  useEffect(() => {
     getData()
   
  }, [pokemon])

 
  const displayPokemon = data.map(b => (
    <div>
        <li>{b.ability.name}</li>
    </div>
  ))
 

  return (
    
    <>
    <h1> {pokemon.text}'s abilities</h1>
     <li className="pokemon">
      <span className="pokemon-item">
           {data.map(b => <li> {b.ability.name} </li>)}
      </span>
      </li>
      </>
  
    
  );
}

export default PokemonItem

