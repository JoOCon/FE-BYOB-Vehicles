import React from 'react';
import Card from '../Card/Card';
import './ModelsContainer.css';

const ModelsContainer = (props) => {
  const { models } = props;
  const makesList = models.map(model => (
    <Card
      {...model}
      key={model.id}
    />
  ));
  return (
    <section className="makes-cont">
      {makesList}
    </section>
  );
};

export default ModelsContainer;
