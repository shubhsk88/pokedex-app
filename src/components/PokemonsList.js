import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../actions';
import Tilt from 'react-tilt';
import { pokeTypes } from '../constants';
import ReactLoading from 'react-loading';

import PokemonCard from './PokemonCard';
const PokemonsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

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

  return (
    <>
      <div class="flex justify-end">
        <select
          className="px-4 py-2 bg-gray-200 rounded-lg shadow-lg "
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
      </div>
      <div className="my-12 flex flex-wrap">
        {isLoaded ? (
          filteredPokemon.map((pokemon) => (
            <Tilt className="Tilt" options={{ max: 20, perspective: 2000 }}>
              <PokemonCard pokemon={pokemon} />
            </Tilt>
          ))
        ) : (
          <div className="mt-64 mx-auto">
            <ReactLoading
              type="balls"
              color="#333333"
              height={200}
              width={100}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default PokemonsList;
