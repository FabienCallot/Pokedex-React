import axios from 'axios';

const apiAxios = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export default apiAxios;
