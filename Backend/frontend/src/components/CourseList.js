// src/components/CourseList.js
import React, { useState } from 'react';

function CourseList({ subjects }) {
  const [expandedCourses, setExpandedCourses] = useState([]);

  const toggleCourse = (subject) => {
    if (expandedCourses.includes(subject)) {
      setExpandedCourses(expandedCourses.filter((item) => item !== subject));
    } else {
      setExpandedCourses([...expandedCourses, subject]);
    }
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
            <p>Course details for {subject} go here...</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet excepturi assumenda dolor pariatur vitae nisi
              delectus laboriosam cumque, dolorum voluptatem saepe officia tempora reprehenderit. Commodi aut sint rem modi
              placeat explicabo officiis quaerat natus! Rerum ad placeat laudantium delectus neque voluptatum incidunt eius
              cupiditate omnis dignissimos enim harum et fugiat eum velit minus aliquam cumque, ipsa nostrum est tempora quo
              dicta maiores molestiae. Officia voluptatem enim sed aspernatur, ea modi eum, recusandae laboriosam dolore dolores
              similique quae? Dolores maxime obcaecati beatae, ex delectus magnam ipsa voluptatem. Alias, minus numquam facere
              maiores, ipsam expedita sequi in doloribus, laboriosam omnis perferendis mollitia.
            </p>
            <button className="view-button">View Course</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
