import apiAxios from './index';
export type PokemonType = { [key: string]: string };
const getPokemonTypes = async (): Promise<string[]> => {
  const response = await apiAxios.get(`/type`);
  const data = await response.data.results;
  //console.log(data);
  const listTypes = data.map((type: PokemonType) => type.name);
  return listTypes;
};

export default getPokemonTypes;
