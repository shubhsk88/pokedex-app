import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tilt from 'react-tilt';
import ReactLoading from 'react-loading';
import { getPokemons } from '../actions';
import pokeTypes from '../constants';

import PokemonCard from '../components/PokemonCard';

const PokemonsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const [type, setType] = useState('All');
  const [search, setSearch] = useState('');

  const pokemons = useSelector((state) => state.data.pokemons);
  const isLoaded = useSelector((state) => state.data.isPokemonsLoaded);
  const filteredPokemon = useMemo(
    () =>
      type !== 'All'
        ? pokemons.filter((pokemon) => {
            const arr = pokemon.types;

            for (let i = 0; i < arr.length; i += 1) {
              if (arr[i].type.name === type) return true;
            }
            return false;
          })
        : pokemons,

    [type, pokemons]
  );
  const searchResults = useMemo(
    () =>
      search
        ? filteredPokemon.filter((pokemon) =>
            pokemon.name.includes(search.toLowerCase())
          )
        : filteredPokemon,
    [search, filteredPokemon]
  );

  return (
    <>
      <div className="flex justify-center mt-3">
        <input
          type="text"
          className="bg-gray-200 border-2  appearance-none border-gray-200 px-4 py-2 text-lg focus:outline-none focus:border-purple-600 focus:bg-white   rounded-lg shadow-lg "
          id="search"
          placeholder="Search pokemons here!!!"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
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
      <div className="my-12 grid gap-4 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
        {isLoaded ? (
          searchResults.map((pokemon) => (
            <div key={pokemon.name} className="md:mx-4">
              <Tilt className="Tilt" options={{ max: 20, perspective: 2000 }}>
                <PokemonCard pokemon={pokemon} />
              </Tilt>
            </div>
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
