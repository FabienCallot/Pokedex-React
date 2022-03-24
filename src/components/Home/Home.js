/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect, useState } from 'react';
import { getAllPokemons } from '../../request/getAllPokemons';
import scrollToTop from '../hooks/scrollToTop';
import PokemonCard from '../PokemonCard/PokemonCard';
import './home.scss';

const Home = (props) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPokemons, setLoadPokemons] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=21'
  );
  const [sortedById, setSortedById] = useState(false);
  const [sortedByName, setSortedByName] = useState(false);
  const [sortedByType, setSortedByType] = useState(false);

  const [height, setHeight] = useState(window.innerHeight);
  const breakpoint = 1000;

  console.log(allPokemons);

  const sortById = () => {
    allPokemons.sort(function (a, b) {
      return a.id - b.id;
    });
  };

  const sortByName = () => {
    allPokemons.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };

  const sortByType = () => {
    allPokemons.sort(function (a, b) {
      if (a.type < b.type) {
        return -1;
      }
      if (a.type > b.type) {
        return 1;
      }
      return 0;
    });
  };
  const handleSortId = () => {
    setSortedById(true);
    setSortedByName(false);
    setSortedByType(false);
  };

  const handleSortName = () => {
    setSortedByName(true);
    setSortedById(false);
    setSortedByType(false);
  };
  /**
   * This function is used to sort the tags by name
   */

  const handleSortType = () => {
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
    const handleHeightWindow = () => setHeight(window.pageYOffset);
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
      {sortedById && sortById()}
      {sortedByName && sortByName()}
      {sortedByType && sortByType()}
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
