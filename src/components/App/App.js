import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ModelsContainer from '../ModelsContainer/ModelsContainer';
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

  updateModels = () => {
    this.fetchModels();
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
        <ModelsContainer models={models} />
      </div>
    );
  }
}

export default App;
