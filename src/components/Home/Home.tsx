/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllPokemons } from '../../request/getAllPokemons';
import PokemonCard from '../PokemonCard/PokemonCard';
import Button from '../Button/Button';
import { sortById, sortByName, sortByType } from '../../utils/sorting';
import type { Pokemon } from '../PokemonCard/PokemonCard';
import './home.scss';

const Home = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [loadPokemons, setLoadPokemons] = useState<string>(
    'https://pokeapi.co/api/v2/pokemon?limit=12'
  );
  const [sortedById, setSortedById] = useState<boolean>(false);
  const [sortedByName, setSortedByName] = useState<boolean>(false);
  const [sortedByType, setSortedByType] = useState<boolean>(false);

  //console.log(allPokemons);

  // if sorted by id :
  const handleSortId = (): void => {
    setSortedById(true);
    setSortedByName(false);
    setSortedByType(false);
  };

  // if sorted by name:
  const handleSortName = (): void => {
    setSortedByName(true);
    setSortedById(false);
    setSortedByType(false);
  };

  // if sorted by type :
  const handleSortType = (): void => {
    setSortedByType(true);
    setSortedById(false);
    setSortedByName(false);
  };

  useEffect(() => {
    /* Fetching all the pokemons from the API and storing them in the state. */
    getAllPokemons(loadPokemons, setLoadPokemons, setAllPokemons);
  }, []);
  return (
    <div>
      <div className="pokemon-filter">
        <Button
          clickEvent={() => {
            handleSortName();
          }}
          className="pokemon-filter-button"
          text="Sort by Name"
        />
        <Button
          clickEvent={() => {
            handleSortId();
          }}
          className="pokemon-filter-button"
          text="Sort by Id"
        />
        <Button
          clickEvent={() => {
            handleSortType();
          }}
          className="pokemon-filter-button"
          text="Sort by Types"
        />
      </div>
      {sortedById && sortById(allPokemons)}
      {sortedByName && sortByName(allPokemons)}
      {sortedByType && sortByType(allPokemons)}
      <section className="pokemon-container">
        {allPokemons.map((pokemon, index) => (
          <PokemonCard
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            type={pokemon.type}
          />
        ))}
      </section>
      <Button
        clickEvent={() => {
          getAllPokemons(loadPokemons, setLoadPokemons, setAllPokemons);
        }}
        className=" button-load-more"
        text="Load More"
      />
    </div>
  );
};
export default Home;
