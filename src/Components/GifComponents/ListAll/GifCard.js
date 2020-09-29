/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const GifCard = (props) => (
  <div>
    <h3>{props.gifObj.name}</h3>
    <img
      src={props.gifObj.img}
      alt=""
      value={props.gifObj.id}
      onClick={() => props.clickHandler(props.gifObj.id)}
    />
  </div>
);

export default GifCard;

GifCard.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  gifObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
