export const GET_POKEMONS = 'GET_POKEMONS';

export const GET_POKEMON = 'GET_POKEMON';
export const RESET_POKEMON = 'RESET_POKEMON';

const fetchDetails = async (pokemon) => {
  const { url } = pokemon;
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
// function fetchPokemonData(pokemons) {
//   const newNum = [];
//   pokemons.forEach(async (pokemon) => await newNum.push(fetchDetails(pokemon)));
//   console.log(newNum);
//   return newNum;
// }
export function getPokemons() {
  return async function (dispatch) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15');
    const pokemons = await res.json();
    const pokedex = pokemons.results;
    let arr = [];
    const pokemonsDetails = await pokedex.map((pokemon) => {
      fetchDetails(pokemon).then((d) => arr.push(d));
    });
    console.log(arr);
    return dispatch({ type: GET_POKEMONS, payload: pokemonsDetails });
  };
}
