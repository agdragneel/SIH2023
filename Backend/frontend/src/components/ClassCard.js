import React from 'react';

function ClassCard({ classData, onSelect }) {
  return (
    <div
      className={`class-card ${classData.className}`}
      onClick={() => onSelect(classData)}
    >
      <img src={`images/${classData.className}.jpg`} alt={classData.className} />
      <h3>{classData.className}</h3>
    </div>
  );
}

export default ClassCard;
