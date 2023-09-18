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
    imgurl: 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHdhdGVyfHx8fHx8MTY5NTAxODAzMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400'
  },
  {
    className: 'I',
    subjects: ['Math', 'Science', 'Social Studies'],
    descriptions: {
      Math: 'Math description for Class I',
      Science: 'Science description for Class I',
      'Social Studies': 'Social Studies description for Class I',
    },
    imgurl: 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHdhdGVyfHx8fHx8MTY5NTAxODAzMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',

  },
  {
    className: 'II',
    subjects: ['Math', 'Science', 'Social Studies'],
    descriptions: {
      Math: 'Math description for Class II',
      Science: 'Science description for Class II',
      'Social Studies': 'Social Studies description for Class II',
    },
    imgurl: 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHdhdGVyfHx8fHx8MTY5NTAxODAzMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',

  },
  {
    className: 'III',
    subjects: ['Math', 'Science', 'Social Studies', 'History'],
    descriptions: {
      Math: 'Math description for Class III',
      Science: 'Science description for Class III',
      'Social Studies': 'Social Studies description for Class III',
      History: 'History description for Class III',
    },
    imgurl: 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHdhdGVyfHx8fHx8MTY5NTAxODAzMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',

  },
  {
    className: 'IV',
    subjects: ['Math', 'Science', 'Social Studies', 'History'],
    descriptions: {
      Math: 'Math description for Class IV',
      Science: 'Science description for Class IV',
      'Social Studies': 'Social Studies description for Class IV',
      History: 'History description for Class IV',
    },
    imgurl: 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHdhdGVyfHx8fHx8MTY5NTAxODAzMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',

  },
  {
    className: 'V',
    subjects: ['Math', 'Science', 'Social Studies', 'History'],
    descriptions: {
      Math: 'Math description for Class V',
      Science: 'Science description for Class V',
      'Social Studies': 'Social Studies description for Class V',
      History: 'History description for Class V',
    },
    imgurl: 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHdhdGVyfHx8fHx8MTY5NTAxODAzMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400'

  },
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
                onSelect={(className, subject) => {
                  setSelectedClass(className);
                }}
              />
            ))}
          </div>
        ) : (
          <CourseList
            subjects={classes.find((classData) => classData.className === selectedClass)?.subjects || []}
            descriptions={classes.find((classData) => classData.className === selectedClass)?.descriptions || {}}
            selectedClass={selectedClass}
          />
        )}
      </main>
    </div>
  );
}
