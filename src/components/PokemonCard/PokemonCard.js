import React from 'react';
import { Link } from 'react-router-dom';
import './pokemonCard.scss'

const PokemonCard = ({ id, name, image, type }) => {

  const style = `pokemon-card ${type}`

  return (
    <Link to={`/pokemon/${name}`} className={style}>
      <img src={image} alt={name}/>
      <div className='pokemon-detail'>
        <small>#{id}</small>
        <h3>{name}</h3>
        <small>Type: {type}</small>
      </div>
    </Link>
  )
}

export default React.memo(PokemonCard)