import React from 'react';

import GifCard from '../ListAll/GifCard';

class FavoriteContainer extends React.PureComponent {
  render() {
    const favoriteCards = this.props.favorites.map((favorite) => (
      <GifCard
        gifObj={favorite}
        key={favorite.id}
        clickHandler={() => this.props.clickHandler(favorite.id)}
      />
    ));
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {favoriteCards}
      </div>
    );
  }
}

export default FavoriteContainer;


