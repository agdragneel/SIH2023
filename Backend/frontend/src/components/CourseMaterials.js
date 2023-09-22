import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Exercises from './Exercises';
import Lectures from './Lectures';
import StudyMat from './StudyMat';
import './CourseMaterials.css';

export default function CourseMaterials(props) {
  const [username, setUsername] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [filterProg, setFilterProg] = useState([]);
  const [showButton, setShowButton] = useState(true); // State variable to control button visibility

  useEffect(() => {
    // Fetch the current user's username from the API
    axios
      .get('/currentuser/') // Replace with the actual API endpoint
      .then((response) => {
        setUsername(response.data.username);
      })
      .catch((error) => {
        console.error('Error fetching current user:', error);
      });

    // Fetch the CSRF token from the cookies
    const csrfTokenFromCookie = document.cookie
      .split(';')
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith('csrftoken='))
      .split('=')[1];

    setCsrfToken(csrfTokenFromCookie);
  }, []);

  const handleCompleteClick = () => {
    const data = {
      username: username,
      vclass: props.class.toLowerCase(),
    };

    axios
      .get('/progressapi/')
      .then((response) => {
        const filteredProgress = response.data.filter((progress) => (
          progress.vclass === props.class.toLowerCase() && progress.username === username
        ));

        if (filteredProgress.length === 0) {
          // If no progress bar exists, create a new one (POST)
          axios
            .post('/progressapi/', data, {
              headers: {
                'X-CSRFToken': csrfToken,
              },
            })
            .then((progressResponse) => {
              console.log('Progress record created:', progressResponse);
              // Hide the button after completion
              setShowButton(false);
            })
            .catch((error) => {
              console.error('Error creating progress record:', error);
            });
        } else {
          // If a progress bar exists, update it (PUT)
          const existingProgress = filteredProgress[0];
          const newPercent = existingProgress.percent + 100 / props.subjectcount;

          axios
            .put('/progressapi/', { ...existingProgress, percent: newPercent }, {
              headers: {
                'X-CSRFToken': csrfToken,
              },
            })
            .then((progressResponse) => {
              console.log('Progress record updated:', progressResponse);
              // Hide the button after completion
              setShowButton(false);
            })
            .catch((error) => {
              console.error('Error updating progress record:', error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="CourseMaterials">
      <div>
        <h1 className="PageTitle">
          You are currently viewing the {props.course} Course page for{' '}
          {props.class}
        </h1>
      </div>
      <section className="StudySection">
        <StudyMat course={props.course} class={props.class}></StudyMat>
      </section>
      <section className="LecturesSection">
        <h2 className="SectionTitle">Video(s):</h2>
        <Lectures course={props.course} class={props.class}></Lectures>
      </section>
      <section className="ExercisesSection">
        <h2 className="SectionTitle">Exercise PDF(s):</h2>
        <Exercises course={props.course} class={props.class}></Exercises>
      </section>

      {showButton && <button onClick={handleCompleteClick}>Complete</button>}
    </div>
  );
}
