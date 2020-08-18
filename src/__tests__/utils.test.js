import { showPokemonId, colorPicker } from '../utils';

describe('Utils', () => {
  describe('should pick the right color for each type', () => {
    test('should return the class of correct type', () => {
      expect(colorPicker('fire')).toBe('bg-orange-400');
    });
    test('should the default class of new type', () => {
      expect(colorPicker('random')).toBe('bg-gray-200');
    });
  });
  describe('should assign the correct # number to the pokemon with the id', () => {
    test('should return the number with three digit when id is single number', () => {
      expect(showPokemonId(1)).toBe('#001');
    });
    test('should return the number with three digit when id is two digit number', () => {
      expect(showPokemonId(11)).toBe('#011');
    });
    test('should return the number with three digit when id is thrree digit number', () => {
      expect(showPokemonId(188)).toBe('#188');
    });
  });
});
