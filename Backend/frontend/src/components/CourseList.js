import React, { useState ,useEffect} from 'react';

function CourseList({ subjects, descriptions }) {
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
  const determineCourseUrl = (selectedClass, subject) => {
    // Add your logic to determine the URL for the given class and course
    // You can use a switch statement, if-else conditions, or any other method to map classes and subjects to URLs
    // Return the appropriate URL based on your logic

    // Example:
    switch (selectedClass) {
      case 'LKG':
        switch (subject) {
          case 'Math':
            return '/lkg-math-course';
          case 'Science':
            return '/lkg-science-course';
          case 'English':
            return '/lkg-english-course';
          default:
            return '/404'; // Default or error page
        }
      case 'I':
        // Implement URLs for Class I subjects
        break;
      // Handle other classes
      default:
        return '/404'; // Default or error page
    }
  };

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
