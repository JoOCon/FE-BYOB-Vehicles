import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      displayInfo: false
    };
  }

  toggleInfo = () => {
    const { displayInfo } = this.state;

    this.setState({ displayInfo: !displayInfo })
  }

  render() {
    const { displayInfo } = this.state;
    const { ...model } = this.props;

    return (
      <article className="model-card-cont">
        <h2 onClick={this.toggleInfo}>
          {model.model_name}
        </h2>
          <span
            className={displayInfo ? "display-model-info": "hidden"}
          >
            <p>
              Body: {model.body || 'null'}
            </p>
            <p>
              Engine: {model.engine || 'null'}
            </p>
            <p>
              Top Speed: {model.top_speed || 'null'}
            </p>
            <p>
              HP: {model.horse_power || 'null'}
            </p>
            <p>
              Transmission: {model.transmission || 'null'}
            </p>
          </span>
        
      </article>
    );
  }
}

export default Card;
