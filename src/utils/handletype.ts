import { Dispatch } from 'react';

export const handleType = (
  pokemonType: string,
  setSelectedType: Dispatch<number>
) => {
  if (pokemonType === 'normal') {
    let result = 1;
    console.log(result);
    setSelectedType(result);
  }
  if (pokemonType === 'fighting') {
    let result = 2;
    console.log(result);
    setSelectedType(result);
  }
};
