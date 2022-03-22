import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './pokemonCard.scss';

const PokemonCard = ({ id, name, image, type }) => {
  const style = `pokemon-card ${type}`;
  return (
    <Link to={`/pokemon/${name}`} className={style}>
      <img src={image} alt={name} />
      <div className="pokemon-detail">
        <div className="pokemon-detail-first">
          <p>#{id}</p>
          <h3>{name}</h3>
        </div>
        <p className="pokemon-detail-type">Type: {type}</p>
      </div>
    </Link>
  );
};

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default React.memo(PokemonCard);
