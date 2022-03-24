import { Pokemon } from '../components/PokemonCard/PokemonCard';

/**
 * Sort all the pokemons by their id
 * @returns Nothing.
 */
export const sortById = (data: Pokemon[]): void => {
  data.sort(function (a: Pokemon, b: Pokemon): number {
    return a.id - b.id;
  });
};

/**
 * Sort all the pokemon by name
 */
export const sortByName = (data: Pokemon[]): void => {
  data.sort(function (a: Pokemon, b: Pokemon): number {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};

/**
 * Sort all the pokemon by their type
 */
export const sortByType = (data: Pokemon[]): void => {
  data.sort(function (a: Pokemon, b: Pokemon): number {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  });
};
