import React from 'react';
import PropTypes from 'prop-types';

import GifCard from './GifCard';

const GifContainer = (props) => {
  const gifObjs = props.allGifs.map((gifObj) => (
    <GifCard
      gifObj={gifObj}
      key={gifObj.id}
      clickHandler={props.clickHandler}
    />
  ));

  return (
    <div className="index">
      <h1>Index</h1>
      {gifObjs}
    </div>
  );
};

export default GifContainer;

GifContainer.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  allGifs: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};
