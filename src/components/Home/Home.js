/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
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

  const [showButton, setShowButton] = useState(false);

  const getAllPokemons = async () => {
    const response = await axios.get(loadPokemons);
    const data = await response.data;
    setLoadPokemons(data.next);
    function createPokemonItem(result) {
      result.forEach(async (pokemon) => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response.data;
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonItem(data.results);
  };

  //console.log(allPokemons);

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
      if (a.types[0].type.name < b.types[0].type.name) {
        return -1;
      }
      if (a.types[0].type.name > b.types[0].type.name) {
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

  const handleSortTag = () => {
    setSortedByType(true);
    setSortedById(false);
    setSortedByName(false);
  };

  useEffect(() => {
    getAllPokemons();
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  return (
    <div>
      <div className="pokemon-filter">
        <button className="button" onClick={() => handleSortName()}>
          trier par nom
        </button>
        <button className="button" onClick={() => handleSortId()}>
          trier par id
        </button>
        <button className="button" onClick={() => handleSortTag()}>
          trier par tag
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
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
          />
        ))}
        <button
          className="button button-load-more"
          onClick={() => {
            getAllPokemons();
          }}
        >
          Load more
        </button>
      </section>

      {showButton && (
        <button onClick={scrollToTop} className="button button-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
};
export default Home;
