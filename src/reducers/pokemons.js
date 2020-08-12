import {
  GET_POKEMONS,
  GET_POKEMON,
  RESET_POKEMON,
  GET_EVOLUTION,
} from '../actions';

const initialState = {
  pokemons: [],
  pokemon: {},
  isPokemonsLoaded: false,
  isPokemonLoaded: false,
  evolution: [],
};

export default function (state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case GET_POKEMONS:
      return { ...state, pokemons: payload, isPokemonsLoaded: true };
    case GET_POKEMON:
      return { ...state, pokemon: payload, isPokemonLoaded: true };
    case RESET_POKEMON:
      return { ...state, isPokemonLoaded: false };
    case GET_EVOLUTION:
      return { ...state, evolution: payload };
    default:
      return state;
  }
}
