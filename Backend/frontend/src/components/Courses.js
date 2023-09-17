import React, { useState } from 'react';
import ClassCard from './ClassCard';
import CourseList from './CourseList';

const classes = [
  {
    className: 'LKG',
    subjects: ['Math', 'Science', 'English'],
    descriptions: {
      Math: 'Math description for LKG',
      Science: 'Science description for LKG',
      English: 'English description for LKG',
    },
  },
  {
    className: 'I',
    subjects: ['Math', 'Science', 'English'],
    descriptions: {
      Math: 'Math description for Class I',
      Science: 'Science description for Class I',
      English: 'English description for Class I',
    },
  

  },
  {
    className: 'II',
    subjects: ['Math', 'Science', 'Social Studies'],
    descriptions: {
      Math: 'Math description for Class II',
      Science: 'Science description for Class II',
      'Social Studies': 'Social Studies description for Class II',
    },
  

  },
  {
    className: 'III',
    subjects: ['Math', 'Science', 'Social Studies','History'],
    descriptions: {
      Math: 'Math description for Class III',
      Science: 'Science description for Class III',
      'Social Studies': 'Social Studies description for Class III',
      History: 'History Description for Class III'
    },
  

  },
  {
    className: 'IV',
    subjects: ['Math', 'Science', 'Social Studies','History'],
    descriptions: {
      Math: 'Math description for Class IV',
      Science: 'Science description for Class IV',
      'Social Studies': 'Social Studies description for Class IV',
      History: 'History Description for Class IV'
    },
  

  },
  {
    className: 'V',
    subjects: ['Math', 'Science', 'Social Studies','History'],
    descriptions: {
      Math: 'Math description for Class V',
      Science: 'Science description for Class V',
      'Social Studies': 'Social Studies description for Class V',
      History: 'History Description for Class V'
    },
  

  },
  // Add more class data as needed
];

export default function Courses() {
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <div>
      <main>
        {!selectedClass ? (
          <div className="class-selection">
            {classes.map((classData) => (
              <ClassCard
                key={classData.className}
                classData={classData}
                onSelect={setSelectedClass}
              />
            ))}
          </div>
        ) : (
          <CourseList
            subjects={selectedClass.subjects}
            descriptions={selectedClass.descriptions}
            classSel={selectedClass.className}
          />
        )}
      </main>
    </div>
  );
}