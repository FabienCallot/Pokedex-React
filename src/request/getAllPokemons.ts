import apiAxios from "./index";
import type { Pokemon } from "../components/PokemonCard/PokemonCard";
import { Dispatch } from "react";

type Result = [
  {
    name: string;
    url: string;
  }
];
type Data = {
  name: string;
  url: string;
};
// TODO: manage any type
export async function getAllPokemons(
  load: string,
  setLoad: Dispatch<string>,
  setItems: Dispatch<any>
) {
  const response = await apiAxios.get(load);
  const data = await response.data;
  setLoad(data.next);

  async function createPokemonItem(result: Result) {
    result.forEach(async (pokemon: Data): Promise<Pokemon> => {
      const response = await apiAxios.get(`/pokemon/${pokemon.name}`);
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
  }

  const lol = await createPokemonItem(data.results);

  return lol;
}
