import React from 'react';
import PropTypes from 'prop-types';

import GifCard from '../ListAll/GifCard';

const FavoriteContainer = (props) => {
  const favoriteCards = props.favorites.map((favorite) => (
    <GifCard
      gifObj={favorite}
      key={favorite.id}
      clickHandler={() => props.clickHandler(favorite.id)}
    />
  ));
  return (
    <div className="favorites">
      <h1>Favorites</h1>
      {favoriteCards}
    </div>
  );
};

export default FavoriteContainer;

FavoriteContainer.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};
