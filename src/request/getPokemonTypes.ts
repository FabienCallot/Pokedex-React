import apiAxios from './index';
export type Type = { [key: string]: string };
const getPokemonTypes = async (): Promise<Type> => {
  const response = await apiAxios.get(`/type`);
  const data = await response.data.results;
  const listTypes = data.map((type: any) => type.name);
  //console.log(listTypes);
  return listTypes;
};

export default getPokemonTypes;

// data.forEach(
//     (element: { name: string }) => element.name
//   );
