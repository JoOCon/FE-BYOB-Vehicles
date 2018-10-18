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

  handleSearch = (input) => {
    const searchedArray = this.state.models.filter(model => (
      model.model_name.search(input) === 0)
    );
    this.setState({models: searchedArray})
  }

  deleteModel = (id) => {
    const { models } = this.state;
    const foundModel = models.find(model => model.id === id);
    const updatedModels = models.filter(model => model !== foundModel);
    fetch(`${process.env.REACT_APP_DATABASE_API_URL}/api/v1/models/${id}`, {
      method: 'DELETE',
    })
    this.setState({ models: updatedModels });
  }

  render() {
    const { models, toggleForm } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Car Manager</h1>
          <SearchForm handleSearch={this.handleSearch} />
          <button 
            className="toggle-btn"
            onClick={this.handleFormDisplay}
          >
            Add
          </button>
        </header>
        <ModelsContainer 
          models={models} 
          deleteModel={this.deleteModel}
        />
        {toggleForm ? <AddModel updateModels={this.updateModels} /> : <div></div>}
      </div>
    );
  }
}

export default App;
