import React from 'react';
import './MakeCard.css';

const MakeCard = ({ Make, Manufacturer }) => (
  <article className="make-card-cont">
    <h2>{ Make}</h2>
    <h2>{ Manufacturer }</h2>
  </article>
);

export default MakeCard;
