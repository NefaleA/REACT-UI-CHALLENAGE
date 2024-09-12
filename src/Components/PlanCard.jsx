import React from 'react';

const PlanCard = ({ title, details }) => (
  <div className="plan-card">
    <h2>{title}</h2>
    <p>{details}</p>
    <button>Explore</button>
  </div>
);

export default PlanCard;