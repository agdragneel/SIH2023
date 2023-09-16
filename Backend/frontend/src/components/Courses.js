
import React, { useState } from 'react';
import ClassCard from './ClassCard';
import CourseList from './CourseList';

const classes = ['LKG', 'I', 'II', 'III', 'IV', 'V'];

export default function Courses() {

    const [selectedClass, setSelectedClass] = useState(null);
    
  return (
    <div>
      <main>
        {!selectedClass ? (
          <div className="class-selection">
            {classes.map((className) => (
              <ClassCard
                key={className}
                className={className}
                onSelect={setSelectedClass}
              />
            ))}
          </div>
        ) : (
          <CourseList subjects={['Math', 'Science', 'English', 'History']} />
        )}
      </main>
    </div>
  )
}
