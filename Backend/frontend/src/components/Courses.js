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
    imgurl: 'https://images.unsplash.com/photo-1578349035260-9f3d4042f1f7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8a2luZGVyZ2FydGVuLHNjaG9vbHx8fHx8fDE2OTUwMjYwNTA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
    classdesc: 'Class Description for LKG'
  },
  {
    className: 'I',
    subjects: ['Math', 'Science', 'Social Studies'],
    descriptions: {
      Math: 'Math description for Class I',
      Science: 'Science description for Class I',
      'Social Studies': 'Social Studies description for Class I',
    },
    imgurl: 'https://images.unsplash.com/photo-1564429238817-393bd4286b2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8a2luZGVyZ2FydGVuLHNjaG9vbHx8fHx8fDE2OTUwMjYxMDE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
    classdesc: 'Class Description for I'

  },
  {
    className: 'II',
    subjects: ['Math', 'Science', 'Social Studies'],
    descriptions: {
      Math: 'Math description for Class II',
      Science: 'Science description for Class II',
      'Social Studies': 'Social Studies description for Class II',
    },
    imgurl: 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8a2luZGVyZ2FydGVuLHNjaG9vbHx8fHx8fDE2OTUwMjY0MDk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
    classdesc: 'Class Description for II'

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
    imgurl: 'https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8a2luZGVyZ2FydGVuLHNjaG9vbHx8fHx8fDE2OTUwMjYzMDQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
    classdesc: 'Class Description for III'

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
    imgurl: 'https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8a2luZGVyZ2FydGVuLHNjaG9vbHx8fHx8fDE2OTUwMjYzMzI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
    classdesc: 'Class Description for IV'

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
    imgurl: 'https://images.unsplash.com/photo-1600792174277-8d734290a61f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8a2luZGVyZ2FydGVuLHNjaG9vbHx8fHx8fDE2OTUwMjY0NDQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
    classdesc: 'Class Description for IV'

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
