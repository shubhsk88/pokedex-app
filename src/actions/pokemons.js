export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_EVOLUTION = 'GET_EVOLUTION';
export const GET_POKEMON = 'GET_POKEMON';
export const RESET_POKEMON = 'RESET_POKEMON';

const fetchDetails = async (pokemon) => {
  const { url } = pokemon;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export function getPokemon(id) {
  return async function (dispatch) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();
    return dispatch({ type: GET_POKEMON, payload: pokemon });
  };
}
export function getPokemons() {
  return async function (dispatch) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    const pokemons = await res.json();
    const pokedex = pokemons.results;

    const pokemonsDetails = await Promise.all(
      pokedex.map(async (pokemon) => {
        const result = await fetchDetails(pokemon);

        return result;
      })
    );

    return dispatch({ type: GET_POKEMONS, payload: pokemonsDetails });
  };
}
export function getEvolution(id) {
  return async function (dispatch) {
    const res = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`);

    const evolution = await res.json();
    let { chain } = evolution;

    const arr = [chain.species.name];
    while (chain.evolves_to.length !== 0) {
      chain = chain.evolves_to[0];

      arr.push({
        name: chain.species.name,
        id: chain.species.url.match(/(\d+)/g)[1],
      });
    }
    return dispatch({ type: GET_EVOLUTION, payload: arr });
  };
}
