import apiAxios from './index';
import type { Pokemon } from '../components/PokemonCard/PokemonCard';
type Result = [string];

export async function getAllPokemons(
  load: string,
  setLoad: any,
  setItems: any
) {
  const response = await apiAxios.get(load);
  const data = await response.data;
  setLoad(data.next);

  function createPokemonItem(result: Result) {
    result.forEach(async (pokemon: any): Promise<Pokemon> => {
      const response = await apiAxios.get(`/${pokemon.name}`);
      const data = await response.data;
      const dataFiltered = {
        id: data.id,
        name: data.name,
        image: data.sprites.other.dream_world.front_default,
        type: data.types[0].type.name,
      };
      setItems((currentList: any) => [...currentList, dataFiltered]);
      return dataFiltered;
    });
  }

  createPokemonItem(data.results);
}
