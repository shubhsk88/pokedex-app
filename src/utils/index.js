export const colorPicker = (type) => {
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
