export const GET_POKEMONS = 'GET_POKEMONS';

export const GET_POKEMON = 'GET_POKEMON';
export const RESET_POKEMON = 'RESET_POKEMON';

const fetchDetails = async (pokemon) => {
  const { url } = pokemon;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};


export function getPokemon(id)
{
  return async function(dispatch)
  {
    const res=await fetch('')
  }
}
export function getPokemons() {
  return async function (dispatch) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15');
    const pokemons = await res.json();
    const pokedex = pokemons.results;
    let arr = [];
    const pokemonsDetails = await Promise.all(
      pokedex.map(async (pokemon) => {
        const result = await fetchDetails(pokemon);
       

        return result;
      })
    );
    
    return dispatch({ type: GET_POKEMONS, payload: pokemonsDetails });
  };
}
