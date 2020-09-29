import React from 'react';
import './App.css';

import FormGif from './Components/AppComponents/FormsInputs/FormGif';
import SearchGif from './Components/AppComponents/FormsInputs/SearchGif';
import FavoriteContainer from './Components/GifComponents/Favorites/FavoriteContainer';
import GifContainer from './Components/GifComponents/ListAll/GifContainer';

const GifList = 'http://localhost:3000/gifs';

class App extends React.PureComponent {
  state = {
    stateGifs: [],
    searchValue: '',
  };

  componentDidMount() {
    fetch(GifList)
      .then((resp) => resp.json())
      .then((gifs) => this.setState({ stateGifs: gifs }));
  }

  clickHandler = (id) => {
    const clickArray = [...this.state.stateGifs];
    const clickedImg = this.state.stateGifs.find((obj) => obj.id === id);
    clickedImg.favorite = !clickedImg.favorite;
    this.addToFavorites(clickArray);
  };

  addToFavorites = (clickArray) => {
    this.setState({ stateGifs: clickArray });
  };

  submitHandler = (obj) => {
    const submitArray = [obj, ...this.state.stateGifs];
    this.setState({ stateGifs: submitArray });
  };

  searchHandler = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  searchResults = () => {
    const searchArray = [...this.state.stateGifs];
    return searchArray.filter((obj) =>
      obj.name.toLowerCase().includes(this.state.searchValue.toLowerCase()),
    );
  };

  favoritesClickHandler = (id) => {
    const clickArray = [...this.state.stateGifs];
    const clickedImg = clickArray.find((obj) => obj.id === id);
    clickedImg.favorite = !clickedImg.favorite;
    this.setState({ stateGifs: clickArray });
  };

  favoritesList = () => {
    return this.state.stateGifs.filter(
      (obj) =>
        obj.favorite === true &&
        obj.name.toLowerCase().includes(this.state.searchValue.toLowerCase()),
    );
  };

  render() {
    return (
      <div className="container">
        <GifContainer
          allGifs={this.state.stateGifs}
          clickHandler={this.clickHandler}
        />
        <FavoriteContainer
          favorites={this.favoritesList()}
          clickHandler={this.favoritesClickHandler}
        />
        <FormGif submitHandler={this.submitHandler} />
        <SearchGif
          searchHandler={this.searchHandler}
          searchValue={this.state.searchValue}
        />
      </div>
    );
  }
}

export default App;
