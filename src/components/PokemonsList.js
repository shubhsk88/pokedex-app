import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../actions';
const PokemonsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
    console.log('woek');
  }, [dispatch]);
  const data = useSelector((state) => state.data.pokemons);
  console.log('hi', data);
  return (
    <div>
      hi ,
      {data.map((nor, i) => (
        <div key={i}>{nor.name}</div>
      ))}
    </div>
  );
};

export default PokemonsList;
