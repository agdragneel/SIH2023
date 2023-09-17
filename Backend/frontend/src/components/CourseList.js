import React, { useState,useEffect } from 'react';

function CourseList({ subjects, descriptions,classSel }) {
  const [expandedCourses, setExpandedCourses] = useState([]);
  const [selectedCourseUrl, setSelectedCourseUrl] = useState(null); // Add this state variable

  const toggleCourse = (subject) => {
    if (expandedCourses.includes(subject)) {
      setExpandedCourses(expandedCourses.filter((item) => item !== subject));
    } else {
      setExpandedCourses([...expandedCourses, subject]);
    }
  };

  // Function to handle the "View Course" button click
  const handleViewCourse = (subject) => {
    // Determine the URL based on the selected class and course
    const selectedClass = 'LKG'; // Replace with the actual selected class (you can store this in state)
    const courseUrl = determineCourseUrl(selectedClass, subject); // Implement this function

    // Set the selectedCourseUrl state to trigger the redirect
    setSelectedCourseUrl(courseUrl);
  };

  // Implement a function to determine the URL based on the selected class and course
  // ...

const determineCourseUrl = (selectedClass, subject) => {
  // Define the base URL for each class
  let baseUrl = '';

  switch (selectedClass) {
    case 'LKG':
      baseUrl = '/lkg/';
      break;
    case 'I':
      baseUrl = '/class-i/';
      break;
    case 'II':
      baseUrl = '/class-ii/';
      break;
    case 'III':
      baseUrl = '/class-iii/';
      break;
    case 'IV':
      baseUrl = '/class-iv/';
      break;
    case 'V':
      baseUrl = '/class-v/';
      break;
    default:
      return '/404'; // Default or error page
  }

  // Define the subject-specific URLs based on the selected class
  switch (subject) {
    case 'Math':
      return baseUrl + 'math';
    case 'Science':
      return baseUrl + 'science';
    case 'English':
      return baseUrl + 'english';
    case 'Social Studies':
      // For Class II
      if (selectedClass === 'II') {
        return baseUrl + 'social-studies';
      }
      // For other classes, return 404 or an appropriate error page
      return '/404';
    case 'History':
      // For Class V
      if (selectedClass === 'V') {
        return baseUrl + 'history';
      }
      // For other classes, return 404 or an appropriate error page
      return '/404';
    default:
      return '/404'; // Default or error page
  }
};

// ...


  // Handle the redirect when the selectedCourseUrl changes
  useEffect(() => {
    if (selectedCourseUrl) {
      window.location.href = selectedCourseUrl; // Redirect to the selected URL
    }
  }, [selectedCourseUrl]);

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
            <button className="view-button" onClick={() => handleViewCourse(subject)}>
              View Course
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
