import apiAxios from './index';

export async function getAllPokemons(load, setLoad, setItems) {
  const response = await apiAxios.get(load);
  const data = await response.data;
  setLoad(data.next);

  function createPokemonItem(result) {
    result.forEach(async (pokemon) => {
      const response = await apiAxios.get(`/${pokemon.name}`);
      const data = await response.data;
      console.log(data);
      const dataFiltered = {
        id: data.id,
        name: data.name,
        image: data.sprites.other.dream_world.front_default,
        type: data.types[0].type.name,
      };
      setItems((currentList) => [...currentList, dataFiltered]);
    });
  }

  createPokemonItem(data.results);
}
