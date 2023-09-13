// src/components/ClassCard.js
import React from 'react';

function ClassCard({ className, onSelect }) {
  return (
    <div className={`class-card ${className}`} onClick={() => onSelect(className)}>
      <img src={`images/${className}.jpg`} alt={className} />
      <h3>{className}</h3>
    </div>
  );
}
  
export default ClassCard;
