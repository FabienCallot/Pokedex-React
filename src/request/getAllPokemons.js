import apiAxios from './index';

export async function getAllPokemons(load, setLoad, setItems) {
  const response = await apiAxios.get(load);
  const data = await response.data;
  setLoad(data.next);
  function createPokemonItem(result) {
    result.forEach(async (pokemon) => {
      const response = await apiAxios.get(`/${pokemon.name}`);
      const data = await response.data;
      setItems((currentList) => [...currentList, data]);
    });
  }
  createPokemonItem(data.results);
}
