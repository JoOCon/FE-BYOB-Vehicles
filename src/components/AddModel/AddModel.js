import React, { Component } from 'react';
import './AddModel.css';

class AddModel extends Component {
  constructor() {
    super();
    this.state = {
      makes: [],
      makeId: 1,
      modelName: '',
      body: '',
      engine: '',
      topSpeed: '',
      hP: '',
      transmission: '',
    };
  }

  componentDidMount() {
    this.fetchMakes()
  }

  fetchMakes = () => {
    fetch(`${process.env.REACT_APP_DATABASE_API_URL}/api/v1/makes`)
      .then(response => response.json())
      .then(makes => this.setState({ makes }))
      .catch(error => console.log(error.message));
  }

  handleChange = (e) =>{
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {
      makeId,
      modelName,
      body,
      engine,
      topSpeed,
      hP,
      transmission,
    } = this.state;
    const model = {
      model_name: modelName,
      body,
      engine,
      top_speed: parseInt(topSpeed),
      horse_power: parseInt(hP),
      transmission,
      make_id: makeId
    };

    this.postNewModel(model);
    this.props.updateModels();
  }

  postNewModel = (model) => {
    console.log(model);
    fetch(`${process.env.REACT_APP_DATABASE_API_URL}/api/v1/models`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(model)
    })
  }

  render() {
    const {
      makes,
      makeId,
      modelName,
      body,
      engine,
      topSpeed,
      hP,
      transmission,
    } = this.state;
    const listOptions = makes.map(make => (
      <option key={make.id} value={make.id}>{make.make_name}</option>
    ));
    const isInvalid = makeId === '' || modelName === '' || body === '' || engine === '' || topSpeed === '' || hP === '' || transmission === '';

    return (
      <form onSubmit={this.handleSubmit}>
        <select 
        name="makeId"
        onChange={this.handleChange}
        >
          {listOptions}
        </select>
        <input
          required
          type="text"
          placeholder="Model Name"
          name="modelName"
          value={modelName}
          onChange={this.handleChange}
        />
        <input
          required
          type="text"
          placeholder="Body"
          name="body"
          value={body}
          onChange={this.handleChange}
        />
        <input
          required
          type="text"
          placeholder="Engine"
          name="engine"
          value={engine}
          onChange={this.handleChange}
        />
        <input
          required
          type="number"
          placeholder="Top Speed"
          name="topSpeed"
          value={topSpeed}
          onChange={this.handleChange}
        />
        <input
          required
          type="number"
          placeholder="HP"
          name="hP"
          value={hP}
          onChange={this.handleChange}
        />
        <input
          required
          type="text"
          placeholder="Transmission"
          name="transmission"
          value={transmission}
          onChange={this.handleChange}
        />
        <button disabled={isInvalid} className="add-model-btn">
          SUBMIT
        </button>
      </form>
    );
  }
}

export default AddModel;
