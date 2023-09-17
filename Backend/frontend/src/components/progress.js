import React, { useState, useEffect } from 'react';
import './progress.css';
import axios from 'axios';
const csrfToken = document.cookie
  .split(';')
  .find(cookie => cookie.trim().startsWith('csrftoken='))
  .split('=')[1];

export default function Progressbar(props) {
    const [progress, setProgress] = useState(0);
    const ident = props.class.toLowerCase() + '-' + props.course.toLowerCase();

    const increaseProgress = () => {
        if (progress < 100) {
            setProgress(progress + 10);

            // Update user progress data on the backend
            axios.put('http://127.0.0.1:8000/progressapi/', { key: ident, percent: progress + 10 }, {
    headers: {
      'X-CSRFToken': csrfToken,
    },
  })
  .then(response => {
    console.log('Progress updated successfully:', response.data);
  })
  .catch(error => {
    console.error('Error updating user progress:', error);
    console.error('Error response data:', error.response.data); // Log the response data for debugging
    console.error('Error status:', error.response.status); // Log the response status code for debugging
  });

        }
    };

    const showColor = () => {
        if (progress < 40) return '#ff0000';
        else if (progress < 70) return '#ffa500';
        else return '#2eccf1';
    };

    useEffect(() => {
        // Fetch user progress data from Django backend
        axios.get(`http://127.0.0.1:8000/progressapi/`)
            .then(response => {
                // Find the entry that matches props.course and props.subject
                const matchingProgress = response.data.find(item => item.key === ident);
                console.log(matchingProgress.percent);
                if (matchingProgress) {
                    setProgress(matchingProgress.percent);
                }
            })
            .catch(error => {
                console.error('Error fetching user progress:', error);
            });
    }, [props.course, props.subject]);

    return (
        <div>
            <div className="Progresscontainer">
                <div className="progress-bar">
                    <div className="progressBar-fill" style={{ width: `${progress}%`, backgroundColor: showColor() }}>
                        {progress}%
                    </div>
                </div>
                <div className="progress-label">{progress}%</div>
                <button onClick={increaseProgress}>Submit Assignment</button>
            </div>
        </div>
    );
}
