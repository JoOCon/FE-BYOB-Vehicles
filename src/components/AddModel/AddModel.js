import React, { Component } from 'react';
import './AddModel.css';

class AddModel extends Component {
  constructor() {
    super();
    this.state = {
      makes: [],
      toggleForm: false,
      makeName: '',
      manufacturer: '',
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
    this.fetchMakes();
  }

  fetchMakes = () => {
    fetch(`${process.env.REACT_APP_DATABASE_API_URL}/api/v1/makes`)
      .then(response => response.json())
      .then(makes => this.setState({ makes }))
      .catch(error => console.log(error.message));
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmitModel = (e) => {
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
    const newModel = {
      model_name: modelName,
      body,
      engine,
      top_speed: parseInt(topSpeed),
      horse_power: parseInt(hP),
      transmission,
      make_id: makeId
    };
    this.postNewModel(newModel);
    this.props.updateModels();
  }

  postNewModel = (model) => {
    fetch(`${process.env.REACT_APP_DATABASE_API_URL}/api/v1/models`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(model)
    });
  }

  handleSubmitMake = (e) => {
    e.preventDefault();
    const { makeName, manufacturer } = this.state;
    const newMake = { make_name: makeName, manufacturer };
    this.postNewMake(newMake);
    this.fetchMakes();
    this.setState({toggleForm: false, makeName: '', manufacturer: ''});
  }

  postNewMake = (make) => {
    fetch(`${process.env.REACT_APP_DATABASE_API_URL}/api/v1/makes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(make)
    });
  }

  handleToggleForm = () => {
    const { toggleForm } = this.state
    this.setState({toggleForm: !toggleForm})
  }

  render() {
    const {
      toggleForm,
      makes,
      makesName,
      manufacturer,
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

    const checkForModelInput = makeId === '' || modelName === '' || body === '' || engine === '' || topSpeed === '' || hP === '' || transmission === '';
    const checkForMakeInput = makesName === '' || manufacturer === '';

    const displayMakeForm = toggleForm ? 
      <form onSubmit={this.handleSubmitMake}>
        <input
          required
          type="text"
          placeholder="Make Name"
          name="makeName"
          value={this.state.makeName}
          onChange={this.handleChange}
        />
        <input
          required
          type="text"
          placeholder="manufacturer"
          name="manufacturer"
          value={this.state.manufacturer}
          onChange={this.handleChange}
        />
        <button disabled={checkForMakeInput}>Add Make</button>
      </form> :
      <div></div>

    return (
      <div>
        <select 
        name="makeId"
        onChange={this.handleChange}
        >
          {listOptions}
        </select>
        <button onClick={this.handleToggleForm}>Add Make</button>
        {displayMakeForm}
        <form onSubmit={this.handleSubmitModel}>
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
          <button disabled={checkForModelInput} className="add-model-btn">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default AddModel;
