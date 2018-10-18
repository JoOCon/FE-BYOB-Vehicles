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

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSearch(this.state.input)
    this.setState({input: ''})
  }

  render() {
    const { input } = this.state;
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          className="search-input"
          type="text"
          name="name"
          value={name}
          placeholder="Search model"
          name="input"
          value={input}
          placeholder="Search model"
          onChange={this.handleChange}
        />
        <button>Search</button>
      </form>
    );
  }
};

export default SearchForm;
