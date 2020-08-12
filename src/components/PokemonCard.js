import React from 'react';

const colorPicker = (type) => {
  switch (type) {
    case 'fire':
      return 'bg-orange-400';
    case 'fighting':
      return 'bg-red-400';
    case 'water':
      return 'bg-blue-400';
    case 'flying':
      return 'bg-purple-200';
    case 'grass':
      return 'bg-green-400';
    case 'poison':
      return 'bg-purple-600';
    case 'electric':
      return 'bg-yellow-400';
    case 'rock':
      return 'bg-brown-400';
    case 'ice':
      return 'bg-blue-200';
    case 'steel':
      return 'bg-gray-400';
    default:
      return 'bg-gray-200';
  }
};

const PokemonCard = ({ pokemon }) => {
  return (
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
        <div className="py-2 px-6">{pokemon.id}</div>
        <div className="px-6 py-4">
          <div className="font-bold text-3xl ">{pokemon.name}</div>
          <div className="text-lg  flex  m-2 ">
            <div className="mt-2 mr-2">Type: </div>
            {pokemon.types.map((type) => (
              <span className=" rounded-lg mb-4 flex  p-2 mx-1 bg-gray-200">
                #{type.type.name}
              </span>
            ))}
          </div>
          <div className="text-lg mx-2 flex text-gray-800">
            <div className="mt-2 mr-2">Abilities: </div>
            {pokemon.abilities.map((data) => (
              <span className=" rounded-lg mb-4 flex  p-2 mx-1 bg-gray-200">
                #{data.ability.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
