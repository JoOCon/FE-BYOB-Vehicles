import React from 'react';
import MakeCard from '../MakeCard/MakeCard';
import './MakesContainer.css';

const MakesContainer = (props) => {
  const { makes } = props;
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
};

export default MakesContainer;
