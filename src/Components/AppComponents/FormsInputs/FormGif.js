import React from 'react';
import PropTypes from 'prop-types';

class FormGif extends React.Component {
  state = {
    name: '',
    img: '',
    favorite: false,
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.submitHandler(this.state);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.name}
          placeholder="Enter Image Name"
          onChange={this.changeHandler}
          name="name"
        />
        <input
          type="text"
          value={this.state.img}
          placeholder="Enter Image URL"
          // onChange={this.changeHandler}
          onChange={this.changeHandler}
          name="img"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormGif;

FormGif.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};
