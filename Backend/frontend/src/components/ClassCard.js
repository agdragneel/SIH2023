import React from 'react';

function ClassCard({ classData, onSelect }) {
  return (
    <div
      className={`class-card ${classData.className}`}
      onClick={() => onSelect(classData.className, classData.subjects[0])}
    >
      <img src={`images/${classData.className}.jpg`} alt={classData.className} />
      <h3>{classData.className}</h3>
    </div>
  );
}

export default ClassCard;
