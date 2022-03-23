import axios from 'axios';
//TODO: faire plutot un objet explicite
type TPokemon = (number | string)[];
const getOnePokemon = async (name: string | undefined): Promise<TPokemon> => {
  const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  console.log(result);
  const transformedPokemon: TPokemon = [
    result.data.name,
    `${result.data.sprites.other.dream_world.front_default}`,
    result.data.stats[0].stat.name,
    result.data.stats[0].base_stat,
    result.data.stats[1].stat.name,
    result.data.stats[1].base_stat,
    result.data.stats[2].stat.name,
    result.data.stats[2].base_stat,
    result.data.stats[3].stat.name,
    result.data.stats[3].base_stat,
    result.data.stats[4].stat.name,
    result.data.stats[4].base_stat,
    result.data.stats[5].stat.name,
    result.data.stats[5].base_stat,
  ];
  return transformedPokemon;
};

export default getOnePokemon;
