import React, { Component } from 'react';
import MakeCard from '../MakeCard/MakeCard';
import './MakesContainer.css';

class MakesContainer extends Component {
  constructor() {
    super();
    this.state = {
      makes: [],
    };
  }

  render() {
    const { makes } = this.state;
    const makesList = makes.map(make => (
      <MakeCard
        {...make}
        key={make.id}
      />
    ));
    return (
      <section className="makes-cont">
        {makesList}
      </section>
    );
  }
}

export default MakesContainer;
