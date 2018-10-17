import React from 'react';
import MakeCard from '../MakeCard/MakeCard';
import './MakesContainer.css';

const MakesContainer = (props) => {
  const { data } = props;
  const makesList = data.map(make => (
    <MakeCard
      Make={make.make_name}
      Manufacturer={make.manufacturer}
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
