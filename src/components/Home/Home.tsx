/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllPokemons } from '../../request/getAllPokemons';
import scrollToTop from '../../hooks/scrollToTop';
import PokemonCard from '../PokemonCard/PokemonCard';
import type { Pokemon } from '../PokemonCard/PokemonCard';
import { sortById, sortByName, sortByType } from '../../utils/sorting';
import './home.scss';

const Home = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [loadPokemons, setLoadPokemons] = useState<string>(
    'https://pokeapi.co/api/v2/pokemon?limit=21'
  );
  const [sortedById, setSortedById] = useState<boolean>(false);
  const [sortedByName, setSortedByName] = useState<boolean>(false);
  const [sortedByType, setSortedByType] = useState<boolean>(false);

  //state for display or not the button scrollToTop
  const [height, setHeight] = useState(window.innerHeight);
  const breakpoint = 1000;

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

    /**
     * It sets the height of the element to the current scroll position of the window
     */
    const handleHeightWindow = (): void => setHeight(window.pageYOffset);
    window.addEventListener('scroll', handleHeightWindow);
    return () => {
      window.removeEventListener('scroll', handleHeightWindow);
    };
  }, []);
  return (
    <div>
      <div className="pokemon-filter">
        <button
          className="button pokemon-filter-button"
          onClick={() => handleSortName()}
        >
          Sort by Name
        </button>
        <button
          className="button pokemon-filter-button"
          onClick={() => handleSortId()}
        >
          Sort by id
        </button>
        <button
          className="button pokemon-filter-button"
          onClick={() => handleSortType()}
        >
          Sort By type
        </button>
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
        <button
          className="button button-load-more"
          onClick={() => {
            getAllPokemons(loadPokemons, setLoadPokemons, setAllPokemons);
          }}
        >
          Load more
        </button>
      </section>

      {breakpoint < height && (
        <button onClick={scrollToTop} className="button button-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
};
export default Home;