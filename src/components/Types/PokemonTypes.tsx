/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import getPokemonTypes, { Type } from '../../request/getPokemonTypes';
import './pokemonTypes.scss';

const PokemonTypes = () => {
  const [types, setTypes] = useState<any>([]);
  const listTypes = types.map((type: any) => (
    <button
      key={type}
      className={`button type-container-button type-container-button-${type}`}
    >
      {type}
    </button>
  ));
  useEffect(() => {
    (async function () {
      const pokemonTypes = await getPokemonTypes();

      setTypes(pokemonTypes);
    })();
  }, []);
  return <section className="types-container">{listTypes}</section>;
};

export default PokemonTypes;
