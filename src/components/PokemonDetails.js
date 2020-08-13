import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { colorPicker } from '../utils';

import { getEvolution } from '../actions';
const PokemonDetails = ({ pokemon }) => {
  const dispatch = useDispatch();
  const evolutions = useSelector((state) => state.evolution);

  useEffect(() => {
    dispatch(getEvolution(pokemon.id));
  }, [dispatch, pokemon.id]);
  return (
    <div className="max-w-xl mx-auto">
      <header className="flex mx-2 ">
        <div className="text-4xl capitalize">{pokemon.name}</div>
        <div className="text-4xl">#{pokemon.id}</div>
      </header>
      <main>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
        />
        <div className="text-2xl">
          <div className="grid grid-cols-2 grid-row-3 gap-4">
            <div className="flex flex-col">
              <div className="text-white">Height</div>
              <div className="text-black">3'03"</div>
            </div>
            <div className="flex flex-col">
              <div className="text-white">Height</div>
              <div className="text-black">3'03"</div>
            </div>
            <div className="flex flex-col">
              <div className="text-white">Height</div>
              <div className="text-black">3'03"</div>
            </div>
            <div className="flex flex-col">
              <div className="text-white">Height</div>
              <div className="text-black">3'03"</div>
            </div>
            <div className="flex flex-col">
              <div className="text-white">Height</div>
              <div className="text-black">3'03"</div>
            </div>
          </div>
        </div>
        <div className="text-lg    m-2 ">
          <div className="mt-2 mr-2 text-4xl">Type </div>
          {pokemon.types.map((type) => (
            <span
              className={`rounded-lg mb-4 flex  p-2 mx-1 ${colorPicker(
                type.type.name
              )}`}
            >
              #{type.type.name}
            </span>
          ))}
        </div>
        <div className="px-4 py-6">
          <div className="text-4xl">Moves</div>
          <div className="my-2">
            {pokemon.moves.map((pokemon) => (
              <div className="px-4 py-2 bg-gray-200 text-gray-600">
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
      </main>
    </div>
  );
};

export default PokemonDetails;
