import React, { useState } from 'react'

const PokemonForm = (props) => {

  const [inputName, setName] = useState('');

  const updateName = (e) => {
      setName(e.target.value)
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      props.setPokemon([{ text: inputName }])

    /* if(inputName === ""){
        <div><li>no pokemon</li></div>
      }*/
      setName('')
  }

  return (
    <form aria-label="search for pokemon" onSubmit={handleSubmit}>
      <label htmlFor="pokemon" style={{ marginRight: "10px " }}>
        Pokemon name:
      </label>

      <input type="text" id="pokemon"
        className="pokemon-input"

        value={inputName}
        onChange={updateName}
      />

      <input type="submit" value="Search" />
    </form>
  )
}

export default PokemonForm