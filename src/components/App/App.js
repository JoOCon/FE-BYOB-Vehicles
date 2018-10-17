import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ModelsContainer from '../ModelsContainer/ModelsContainer';
import AddModel from '../AddModel/AddModel';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      models: [],
      toggleForm: false
    };
  }

  componentDidMount() {
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

  handleFormDisplay = () => {
    const { toggleForm } = this.state;
    
    this.setState({ toggleForm: !toggleForm })
  }

  render() {
    const { models, toggleForm } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Car Manager</h1>
          <SearchForm />
          <button 
            className="toggle-btn"
            onClick={this.handleFormDisplay}
          >
            ADD Model
          </button>
        </header>
        <ModelsContainer models={models} />
        {toggleForm ? <AddModel updateModels={this.updateModels} /> : <div></div>}
      </div>
    );
  }
}

export default App;
