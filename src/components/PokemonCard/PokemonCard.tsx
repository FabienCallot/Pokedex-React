import React from "react";
import { Link } from "react-router-dom";
import pokeball from "../../docs/img/pokeball.png";
import "./pokemonCard.scss";

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  type: string;
};

const PokemonCard = ({ id, name, image, type }: Pokemon) => {
  const style = `pokemon-card ${type}`;
  return (
    <Link to={`/pokemon/${name}`} className={style}>
      <img src={image ? image : pokeball} alt={name} />
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

export default React.memo(PokemonCard);
