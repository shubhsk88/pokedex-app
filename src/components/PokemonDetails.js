import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { colorPicker } from '../utils';
import { Link, useParams } from 'react-router-dom';

import { getEvolution, getPokemon, resetPokemon } from '../actions';
const PokemonDetails = () => {
  let { id } = useParams();

  const dispatch = useDispatch();
  const evolutions = useSelector((state) => state.data.evolution);
  const pokemon = useSelector((state) => state.data.pokemon);
  const isLoaded = useSelector((state) => state.data.isPokemonLoaded);

  useEffect(() => {
    dispatch(getEvolution(id));
    dispatch(getPokemon(id));
    return () => dispatch(resetPokemon());
  }, [dispatch, id]);
  if (!isLoaded) return <div>Loading</div>;
  return (
    <div className="mx-auto">
      <header className="flex mx-2">
        <div className="text-4xl capitalize">{pokemon.name}</div>
        <div className="text-4xl">#{pokemon.id}</div>
      </header>
      <main>
        <div className="flex w-full justify-around">
          <img
            className="w-1/3 px-4 py-2"
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
          />
          <div className="text-2xl rounded-lg w-1/3  p-4 bg-gray-100">
            <div className="grid grid-cols-2 grid-row-3 gap-4">
              <div className="flex flex-col">
                <div className="text-gray-600">Height</div>
                <div className="text-black">3'03"</div>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-800">Height</div>
                <div className="text-black">3'03"</div>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-800">Height</div>
                <div className="text-black">3'03"</div>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-800">Height</div>
                <div className="text-black">3'03"</div>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-800">Height</div>
                <div className="text-black">3'03"</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-lg    m-2  ">
          <div className="mt-2 mr-2 text-4xl">Type </div>
          <div className="flex">
            {pokemon.types.map((type) => (
              <span
                className={`rounded-lg mb-4  p-2 mx-1 ${colorPicker(
                  type.type.name
                )}`}
              >
                #{type.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className="px-4 py-6">
          <div className="text-4xl">Moves</div>
          <div className="my-2 flex  flex-wrap m-2 px-4 py-2 ">
            {pokemon.moves.map((pokemon) => (
              <div className="px-4 py-2 bg-gray-200 m-2 rounded-lg text-gray-600">
                {pokemon.move.name}
              </div>
            ))}
          </div>
        </div>
        <div className="text-4xl">Evolution</div>
        <div className="w-full bg-gray-400 px-8 py-6 flex">
          {evolutions.map((evolution) => {
            return (
              <div className="flex flex-col">
                <img
                  src={`https://pokeres.bastionbot.org/images/pokemon/${evolution.id}.png`}
                  alt={evolution.name}
                />
                <h2 className="text-3xl">{evolution.name}</h2>
              </div>
            );
          })}
        </div>
        <Link to="/">
          <button>Explore more Pokemon</button>
        </Link>
      </main>
    </div>
  );
};

export default PokemonDetails;
