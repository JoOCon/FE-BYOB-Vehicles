import React, { Component } from 'react';
import './Card.css';
import deleteButton from '../../images/delete.svg';
import PropTypes from 'prop-types';

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
  };

  render() {
    const { displayInfo } = this.state;
    const { deleteModel, ...model } = this.props;

    return (
      <article className="model-card-cont" id={model.id}>
        <h2>
          <span 
            onClick={this.toggleInfo}
            className="h2-span"
          >
            {model.model_name}
          </span>
        <img 
          src={deleteButton} 
          alt="delete-btn" 
          onClick={() => deleteModel(model.id)}
          />
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
};

Card.propTypes = {
  deleteModel: PropTypes.func,
  model: PropTypes.object
};

export default Card;
