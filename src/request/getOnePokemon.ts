import axios from 'axios';
//TODO: faire plutot un objet explicite
export type TPokemon = {
  name: string;
  image: string;
  name_stat1: string;
  stat1: number;
  name_stat2: string;
  stat2: number;
  name_stat3: string;
  stat3: number;
  name_stat4: string;
  stat4: number;
  name_stat5: string;
  stat5: number;
  name_stat6: string;
  stat6: number;
};
const getOnePokemon = async (name: string | undefined): Promise<TPokemon> => {
  const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const transformedPokemon: TPokemon = {
    name: result.data.name,
    image: `${result.data.sprites.other.dream_world.front_default}`,
    name_stat1: result.data.stats[0].stat.name,
    stat1: result.data.stats[0].base_stat,
    name_stat2: result.data.stats[1].stat.name,
    stat2: result.data.stats[1].base_stat,
    name_stat3: result.data.stats[2].stat.name,
    stat3: result.data.stats[2].base_stat,
    name_stat4: result.data.stats[3].stat.name,
    stat4: result.data.stats[3].base_stat,
    name_stat5: result.data.stats[4].stat.name,
    stat5: result.data.stats[4].base_stat,
    name_stat6: result.data.stats[5].stat.name,
    stat6: result.data.stats[5].base_stat,
  };
  return transformedPokemon;
};

export default getOnePokemon;
