import React, { useState } from 'react';

function CourseList({ subjects, descriptions, selectedClass }) {
  const [expandedCourses, setExpandedCourses] = useState([]);

  const toggleCourse = (subject) => {
    if (expandedCourses.includes(subject)) {
      setExpandedCourses(expandedCourses.filter((item) => item !== subject));
    } else {
      setExpandedCourses([...expandedCourses, subject]);
    }
  };

  const determineCourseUrl = (selectedClass, subject) => {
    const subjectUrls = {
      LKG: {
        Math: '/lkg-math-course',
        Science: '/lkg-science-course',
        English: '/lkg-english-course',
      },
      I: {
        Math: '/i-math-course',
        Science: '/i-science-course',
        'Social Studies': '/i-social-studies-course',
      },
      II: {
        Math: '/ii-math-course',
        Science: '/ii-science-course',
        'Social Studies': '/ii-social-studies-course',
      },
      III: {
        Math: '/iii-math-course',
        Science: '/iii-science-course',
        'Social Studies': '/iii-social-studies-course',
        History: '/iii-history-course',
      },
      IV: {
        Math: '/iv-math-course',
        Science: '/iv-science-course',
        'Social Studies': '/iv-social-studies-course',
        History: '/iv-history-course',
      },
      V: {
        Math: '/v-math-course',
        Science: '/v-science-course',
        'Social Studies': '/v-social-studies-course',
        History: '/v-history-course',
      },
    };

    if (subjectUrls[selectedClass] && subjectUrls[selectedClass][subject]) {
      return subjectUrls[selectedClass][subject];
    }

    return '/404';
  };

  return (
    <div className="course-list">
      {subjects.map((subject) => (
        <div className={`subject ${expandedCourses.includes(subject) ? 'expanded' : ''}`} key={subject}>
          <div className="subject-header">
            <h2>{subject}</h2>
            <button className="expand-button" onClick={() => toggleCourse(subject)}>
              {expandedCourses.includes(subject) ? '-' : '+'}
            </button>
          </div>
          <div className={`course-details ${expandedCourses.includes(subject) ? 'expanded' : ''}`}>
            <p>{descriptions[subject]}</p>
            <a href={determineCourseUrl(selectedClass, subject)} className="view-button">View Course</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
