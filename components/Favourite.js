import React, { useState } from 'react';

const Favourite = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const heartColor = isFavorite ? '#C51454' : 'white';
  const heartStroke = isFavorite ? 'none' : '#202020';
  const heartStrokeWidth = isFavorite ? '0' : '1';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill={heartColor}
      stroke={heartStroke}
      strokeWidth={heartStrokeWidth}
      className='favourite-icon'
      onClick={toggleFavorite}
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.17 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.67-3.4 6.86-8.55 11.53L12 21.35z"
      />
    </svg>
  );
};

export default Favourite;
