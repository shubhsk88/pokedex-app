import { GET_POKEMONS, GET_POKEMON, RESET_POKEMON } from '../actions';

const initialState = {
  pokemons: [],
  pokemon: {},
  isPokemonsLoaded: false,
  isPokemonLoaded: false,
};

export default function (state = initialState, actions) {
  const { type } = actions;
  switch (type) {
    case GET_POKEMONS:
      return state;
    case GET_POKEMON:
      return state;
    case RESET_POKEMON:
      return state;
    default:
      return state;
  }
}
