import React from 'react';
import baseCardStyle from './styles/cardStyle';

function ExperienceCard({ company, role, description, time }) {
  return (
    <div style={baseCardStyle}>
      <h3>{role} @ {company}</h3>
      <p><strong>{time}</strong></p>
      <p>{description}</p>
    </div>
  );
}

export default ExperienceCard;