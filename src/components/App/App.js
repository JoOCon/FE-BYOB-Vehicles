import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MakesContainer from '../MakesContainer/MakesContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_DATABASE_API_URL}/api/v1/makes`)
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => console.log(error.message));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <header>
          <SearchForm />
        </header>
        <MakesContainer data={data} />
      </div>
    );
  }
}

export default App;
