import React from 'react';
import './ModelsContainer.css';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const ModelsContainer = (props) => {
  const { deleteModel, models } = props;
  const makesList = models.map(model => (
    <Card
      {...model}
      deleteModel={deleteModel}
      key={model.id}
    />
  ));
  return (
    <section className="makes-cont">
      {makesList}
    </section>
  );
};

ModelsContainer.propTypes = {
  deleteModel: PropTypes.func,
  models: PropTypes.arrayOf(PropTypes.object),
};

export default ModelsContainer;
