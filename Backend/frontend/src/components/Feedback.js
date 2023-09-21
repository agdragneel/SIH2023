import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Feedback.css'; // Import your CSS file

const Feedback = () => {
    const [feedbackList, setFeedbackList] = useState([]);
    const [text, setText] = useState('');
    const [currentUser, setCurrentUser] = useState(null); // Store the current user's details
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        // Function to fetch CSRF token from cookies
        const fetchCsrfToken = () => {
            const csrfTokenCookie = document.cookie
                .split(';')
                .find((cookie) => cookie.trim().startsWith('csrftoken='));
            
            if (csrfTokenCookie) {
                const token = csrfTokenCookie.split('=')[1];
                setCsrfToken(token);
            }
        };

        // Function to fetch feedback data from your Django API using Axios GET
        const fetchFeedbackData = async () => {
            try {
                const response = await axios.get('/feedback/');
                setFeedbackList(response.data);
            } catch (error) {
                console.error('Error fetching feedback data:', error);
            }
        };

        // Function to fetch the current user's details from your 'currentuser' API
        const fetchCurrentUser = async () => {
            try {
                const response = await axios.get('/currentuser/');
                setCurrentUser(response.data);
            } catch (error) {
                console.error('Error fetching current user data:', error);
            }
        };

        fetchCsrfToken();
        fetchFeedbackData();
        fetchCurrentUser(); // Fetch current user data
    }, []);

    const handleSubmit = async () => {
        try {
            // Ensure that currentUser is not null before submitting feedback
            if (!currentUser) {
                console.error('Current user data is not available.');
                return;
            }

            // Handle feedback submission and send data to Django API with Axios POST
            const response = await axios.post('/feedback/', { text, student: currentUser.id }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken, // Include CSRF token in headers
                },
            });

            setFeedbackList([...feedbackList, response.data]);
            setText('');
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <div className="FeedbackContainer">
            <h1 className="FeedbackTitle">Feedback Section</h1>
            <textarea
                className="FeedbackInput"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your feedback here"
            ></textarea>
            <button className="SubmitButton" onClick={handleSubmit}>Submit Feedback</button>
            {/* <ul className="FeedbackList"> */}
                {/* {feedbackList.map((feedback) => ( */}
                    {/* <li key={feedback.id} className="FeedbackItem">{feedback.text}</li> */}
                {/* ))} */}
            {/* </ul> */}
        </div>
    );
};

export default Feedback;
