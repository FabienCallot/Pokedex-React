/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getPokemonsByTypes } from "../../request/getPokemonsByType";
import getPokemonTypes from "../../request/getPokemonTypes";
import Button from "../Button/Button";
import PokemonCard, { Pokemon } from "../PokemonCard/PokemonCard";
import "./pokemonTypes.scss";

// TODO: Code refacto and manage the sencond type
const PokemonTypes = () => {
  const [pokemonsTypes, setPokemonsTypes] = useState<string[]>([]);
  const [pokemonsByType, setPokemonsByType] = useState<Pokemon[]>([]);

  useEffect(() => {
    (async function () {
      const pokemonTypes = await getPokemonTypes();
      setPokemonsTypes(pokemonTypes);
    })();
  }, []);
  //console.log(pokemonsByType);
  //console.log(selectedType);

  return (
    <section className="types">
      <div className="types-container">
        {pokemonsTypes.map((pokemonType: string) => (
          <Button
            key={pokemonType}
            clickEvent={async () => {
              setPokemonsByType([]);
              getPokemonsByTypes(pokemonType, setPokemonsByType);
            }}
            className={`type-container-button type-container-button-${pokemonType}`}
            text={pokemonType}
          />
        ))}
      </div>
      <div className="types-pokemons">
        {pokemonsByType.map((pokemon, index) => (
          <PokemonCard
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            type={pokemon.type}
          />
        ))}
      </div>
    </section>
  );
};

export default PokemonTypes;
