import { Dispatch } from 'react';
import { Pokemon } from '../components/PokemonCard/PokemonCard';
import axios from 'axios';
import apiAxios from './index';

export async function getPokemonsByTypes(
  TypeId: string | undefined,
  setItems: Dispatch<any>
): Promise<Pokemon> {
  console.log(TypeId);
  const response = await apiAxios.get(`/type/${TypeId}`);
  const data = await response.data.pokemon;
  //console.log(data[0].pokemon.url);

  data.forEach(async (item: any): Promise<Pokemon> => {
    const response = await axios.get(`${item.pokemon.url}`);
    const data = await response.data;
    //console.log(data);

    const dataFiltered: Pokemon = {
      id: data.id,
      name: data.name,
      image: data.sprites.other.dream_world.front_default,
      type: data.types[0].type.name,
    };

    setItems((currentList: Pokemon[]) => [...currentList, dataFiltered]);

    return dataFiltered;
  });

  return data;
}
