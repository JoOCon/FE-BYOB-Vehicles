import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MakesContainer from '../MakesContainer/MakesContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      makes: [],
      models: [],
    };
  }

  componentDidMount() {
    this.fetchMakes();
    this.fetchModels();
  }

  fetchMakes = () => {
    fetch(`${process.env.REACT_APP_DATABASE_API_URL}/api/v1/makes`)
      .then(response => response.json())
      .then(makes => this.setState({ makes }))
      .catch(error => console.log(error.message));
  }

  fetchModels = () => {
    fetch(`${process.env.REACT_APP_DATABASE_API_URL}/api/v1/models`)
      .then(response => response.json())
      .then(models => this.setState({ models }))
      .catch(error => console.log(error.message));
  }

  render() {
    const { models } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Car Manager</h1>
          <SearchForm />
        </header>
        <MakesContainer models={models} />
      </div>
    );
  }
}

export default App;