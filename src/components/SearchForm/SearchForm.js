import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value })
  };

  render() {
    const { name } = this.state;
    return (
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          name="name"
          value={name}
          placeholder="Search model"
          onChange={this.handleChange}
        />
        <button className="search-btn">Search</button>
      </form>
    );
  }
};

export default SearchForm;
