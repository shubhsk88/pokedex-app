import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { colorPicker, showPokemonId } from '../utils';

const PokemonCard = ({ pokemon }) => {
  const pokemonColor = colorPicker(pokemon.types[0].type.name);
  return (
    <Link href={`/${pokemon.id}`} passHref>
      <div className="justify-center">
        <div className="shadow-lg overflow-hidden  mx-auto  max-w-xl rounded-md">
          <div className={` ${pokemonColor} flex justify-center`}>
            <Image
              width={200}
              height={200}
              className="w-1/2 py-2 "
              src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
          </div>

          <div className="my-4  text-2xl text-gray-500 px-6">
            {showPokemonId(pokemon.id)}
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-3xl capitalize ">{pokemon.name}</div>
            <div className="flex">
              <div className="my-2 mr-2">Type: </div>
              <div className="text-lg  flex  m-2 ">
                {pokemon.types.map((type) => (
                  <span
                    key={type.type.name}
                    className={`rounded-lg mb-4 flex  p-2 mx-1  ${colorPicker(
                      type.type.name
                    )}`}
                  >
                    #{type.type.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex ">
              <div className=" mr-2 my-2">Abilities: </div>
              <div className="text-lg  flex text-gray-800 flex-wrap">
                {pokemon.abilities.map((data) => (
                  <span
                    key={data.ability.name}
                    className=" rounded-lg mb-4 flex  flex-wrap p-2 mx-1 bg-gray-200"
                  >
                    #{data.ability.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string,
        }),
      })
    ),
    name: PropTypes.string,
    abilities: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  }).isRequired,
};
export default PokemonCard;
