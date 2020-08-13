import React from 'react';
import { colorPicker, showPokemonId } from '../utils';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  return (
    <Link to={`/${pokemon.id}`}>
      <div className=" max-w-sm m-2 ">
        <div className="shadow-lg overflow-hidden rounded-md">
          <div
            className={` ${colorPicker(
              pokemon.types[0].type.name
            )} flex justify-center`}
          >
            <img
              className="w-1/2 py-2 "
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
          </div>

          <div className="my-4  text-2xl text-gray-500 px-6">
            {showPokemonId(pokemon.id)}
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-3xl capitalize ">{pokemon.name}</div>
            <div className="text-lg  flex  m-2 ">
              <div className="mt-2 mr-2">Type: </div>
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
            <div className="text-lg  flex text-gray-800">
              <div className="mt-2 mr-2">Abilities: </div>
              {pokemon.abilities.map((data) => (
                <span className=" rounded-lg mb-4 flex  flex-wrap p-2 mx-1 bg-gray-200">
                  #{data.ability.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
