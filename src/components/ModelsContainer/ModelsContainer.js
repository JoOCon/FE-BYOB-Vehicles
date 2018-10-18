import React from 'react';
import Card from '../Card/Card';
import './ModelsContainer.css';

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

export default ModelsContainer;
