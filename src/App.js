/* eslint-disable */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  // componentDidMount() {
  //   fetch(process.env.REACT_APP_DATABASE_API_URL + '/')
  //     .then(response => response.json())
  //     .then(data => this.setState({ data }))
  //     .catch(error => console.log(error.message));
  // }

  render() {
    return (
      <div className="App">
        {/* {this.state.data} */}
        <h1>randomness test</h1>
      </div>
    );
  }
}

export default App;
