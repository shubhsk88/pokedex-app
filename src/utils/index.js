export const colorPicker = (type) => {
  switch (type) {
    case 'fire':
      return 'bg-orange-400';
    case 'fighting':
      return 'bg-red-600';
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
      return 'bg-yellow-500';
    case 'ice':
      return 'bg-blue-200';
    case 'steel':
      return 'bg-gray-400';
    case 'ground':
      return 'bg-yellow-600';
    case 'psychic':
      return 'bg-red-400';
    case 'bug':
      return 'bg-green-600';
    case 'ghost':
      return 'bg-indigo-700';
    case 'dark':
      return 'bg-yellow-800';
    case 'dragon':
      return 'bg-purple-800';
    case 'fairy':
      return 'bg-pink-400';
    default:
      return 'bg-gray-200';
  }
};

export const showPokemonId = (id) => {
  const str = id.toString();
  if (str.length === 1) return `#00${str}`;
  if (str.length === 2) return `#0${str}`;
  if (str.lengt === 3) return `#${str}`;
};
