import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../actions';

import PokemonCard from './PokemonCard';
const PokemonsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  const pokeTypes = [
    'normal',
    'fire',
    'water',
    'grass',
    'electric',
    'ice',
    'fighting',
    'poison',
    'ground',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dark',
    'dragon',
    'steel',
    'fairy',
  ];

  const [type, setType] = useState('All');

  const pokemons = useSelector((state) => state.data.pokemons);
  const isLoaded = useSelector((state) => state.data.isPokemonsLoaded);
  const filteredPokemon = useMemo(
    () =>
      type !== 'All'
        ? pokemons.filter((pokemon) => {
            let arr = pokemon.types;

            for (let i = 0; i < arr.length; i++) {
              if (arr[i].type.name === type) return true;
            }
            return false;
          })
        : pokemons,
    [type, pokemons]
  );
  console.log(filteredPokemon, type);
  return (
    <>
      <select
        name="filter"
        value={type}
        onChange={(e) => setType(e.target.value)}
        id="filter"
      >
        <option value="All" defaultValue>
          All
        </option>
        {pokeTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <div className="my-12 flex flex-wrap">
        {isLoaded ? (
          filteredPokemon.map((pokemon) => <PokemonCard pokemon={pokemon} />)
        ) : (
          <lottie-player
            src="https://assets4.lottiefiles.com/temp/lf20_Tw0dyZ.json"
            background="transparent"
            speed="1"
            loop
            className="w-64 h-64 mx-auto"
            autoplay
          ></lottie-player>
        )}
      </div>
    </>
  );
};

export default PokemonsList;
