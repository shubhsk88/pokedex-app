export const GET_POKEMONS = 'GET_POKEMONS';

export const GET_POKEMON = 'GET_POKEMON';
export const RESET_POKEMON = 'RESET_POKEMON';

export function getPokemons() {
  return async function (dispatch) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokemons=await res.json();
    return dispatch({type:GET_POKEMONS,
    payload:pokemons.results})
  };
}
