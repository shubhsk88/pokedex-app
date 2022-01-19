import reducer from '../pokemons';
import { GET_POKEMON, RESET_POKEMON } from '../../actions';

describe('reducer', () => {
  test('the reducer should the state to initale state and empty the evolution state when the reset pokemon is dispatched', () => {
    const result = reducer(undefined, { type: RESET_POKEMON });

    expect(result.evolution).toStrictEqual([]);
  });
  test('the action  get pokemon changes the laoding state to be true', () => {
    const result = reducer(undefined, { payload: {}, type: GET_POKEMON });
    expect(result.isPokemonLoaded).toBe(true);
  });
});
