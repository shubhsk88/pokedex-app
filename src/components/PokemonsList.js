import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../actions';


import PokemonCard from './PokemonCard';
const PokemonsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  const pokemons = useSelector((state) => state.data.pokemons);
  const isLoaded = useSelector((state) => state.data.isPokemonsLoaded);
  return (
    <div className="my-12 flex flex-wrap">
      {isLoaded ? (
        pokemons.map((pokemon) => <PokemonCard pokemon={pokemon} />)
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default PokemonsList;
