import React from 'react';
import PropTypes from 'prop-types';

const SearchGif = (props) => (
  <form>
    <input
      type="text"
      placeholder="Search for Image"
      value={props.searchValue}
      onChange={props.searchHandler}
    />
  </form>
);

export default SearchGif;

// SearchGif.defaultProps = {
//   searchValue: '',
// };

// SearchGif.propTypes = {
//   searchHandler: PropTypes.func.isRequired,
//   searchValue: PropTypes.string,
// };
