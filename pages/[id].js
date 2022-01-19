import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactLoading from 'react-loading';
import { colorPicker, showPokemonId } from '../utils';

import { getEvolution, getPokemon, resetPokemon } from '../actions';

const PokemonDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const evolutions = useSelector((state) => state.data.evolution);
  const pokemon = useSelector((state) => state.data.pokemon);
  const isLoaded = useSelector((state) => state.data.isPokemonLoaded);

  useEffect(() => {
    dispatch(getEvolution(id));
    dispatch(getPokemon(id));
    return () => dispatch(resetPokemon());
  }, [dispatch, id]);

  if (!isLoaded) {
    return (
      <div className="mt-64  max-w-xl  flex justify-center">
        <ReactLoading type="balls" color="#333333" height={400} width={200} />
      </div>
    );
  }
  return (
    <div className="mx-auto">
      <header className="flex mx-2  my-4">
        <div className="text-4xl capitalize">{pokemon.name}</div>
        <div className="text-4xl mx-4 text-gray-500 ">
          {showPokemonId(pokemon.id)}
        </div>
      </header>
      <main>
        <div className="flex w-full justify-around">
          <img
            className={`w-1/3 px-4 py-2 rounded-lg overflow-hidden ${colorPicker(
              pokemon.types[0].type.name
            )}`}
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
          />

          <div className="text-2xl rounded-lg w-1/3  p-4 bg-gray-100">
            <div className="grid grid-cols-2 grid-row-3 gap-4">
              <div className="flex flex-col">
                <div className="text-gray-800">Height</div>
                <div className="text-black">{pokemon.height}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-800">Weight</div>
                <div className="text-black">{pokemon.weight}</div>
              </div>
              <div className="flex flex-col col-span-2">
                <div className="text-gray-800">XP</div>
                <div className="text-black">{pokemon.base_experience}</div>
              </div>

              <div className="flex flex-col col-span-2 ">
                <div className="text-gray-800">Abilities</div>
                <div className="text-black flex flex-wrap px-2">
                  {pokemon.abilities.map((ability) => (
                    <div
                      key={ability.ability.name}
                      className="m-1 px-3 py-2 bg-gray-300 rounded-lg text-gray-800 "
                    >
                      {ability.ability.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-lg    my-2  ">
          <div className="my-4   text-4xl">Type </div>
          <div className="flex">
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className={`rounded-lg mb-4  p-2 mx-1 ${colorPicker(
                  type.type.name
                )}`}
              >
                #{type.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className="text-4xl">Evolution</div>
        <div
          className={`${colorPicker(
            pokemon.types[0].type.name
          )}  p-4  my-2 w-full justify-between items-center rounded-lg  flex`}
        >
          {evolutions.map((evolution) => (
            <div key={evolution.name} className="flex flex-col p-8 ">
              <Link href={`${evolution.id}`}>
                <div className="p-8 rounded-full border  border-black">
                  <img
                    className="w-64   overflow-hidden  object-contain
                    "
                    src={`https://cdn.traction.one/pokedex/pokemon/${evolution.id}.png`}
                    alt={evolution.name}
                  />
                </div>
              </Link>
              <h2 className="text-3xl text-center capitalize">
                {evolution.name}
              </h2>
            </div>
          ))}
        </div>
        <div className="text-4xl">Moves</div>
        <div className="py-2">
          <div className="my-2 flex  flex-wrap  px-4 py-2 ">
            {pokemon.moves.map((pokemon) => (
              <div
                key={pokemon.move.name}
                className="px-4 py-2 bg-gray-200 m-2 rounded-lg text-gray-600"
              >
                {pokemon.move.name}
              </div>
            ))}
          </div>
        </div>

        <Link href="/" passHref>
          <div className="flex justify-center my-4">
            <button
              type="button"
              className="px-4 py-2 bg-purple-700 text-purple-100  rounded-lg shadow-lg focus:outline-none hover:bg-purple-600 "
            >
              Explore more Pokemon
            </button>
          </div>
        </Link>
      </main>
    </div>
  );
};

export default PokemonDetails;
