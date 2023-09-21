import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewTests.css'; // Import the CSS file

const ViewTests = () => {
  const [testnames, setTestnames] = useState([]);
  const [selectedTestname, setSelectedTestname] = useState('');
  const [questions, setQuestions] = useState([]);

  // Fetch unique test names from the API
  useEffect(() => {
    axios.get('http://localhost:8000/testquestions/')
      .then((response) => {
        const uniqueTestnames = Array.from(new Set(response.data.map(question => `${question.testname} ${question.vclass} ${question.subject}`)));
        setTestnames(uniqueTestnames);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Fetch questions by selected test name
  useEffect(() => {
    if (selectedTestname) {
      axios.get(`http://localhost:8000/testquestions/?testname=${selectedTestname}`)
        .then((response) => {
          const filter = selectedTestname.split(' ')[0];
          const filteredQuestions = response.data.filter(question => (question.testname === filter));
          setQuestions(filteredQuestions);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedTestname]);

  return (
    <div className="view-tests-container"> {/* Apply a class name for the container */}
      <h1>Question List</h1>
      <div className="select-testname"> {/* Apply a class name for the select */}
        <label>Select Test Name:</label>
        <select
          value={selectedTestname}
          onChange={(e) => setSelectedTestname(e.target.value)}
        >
          <option value="">Select a Test Name</option>
          {testnames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="questions-list"> {/* Apply a class name for the questions list */}
        <h3>Questions for Test: {selectedTestname}</h3>
        <ul>
          {questions.map((question) => (
            <li key={question.id} className="question-item"> {/* Apply a class name for each question */}
              <strong className="question-desc">Question Description:</strong> {question.quesdesc}
              <br />
              <strong className="options-label">Options:</strong>
              <ul className="options-list"> {/* Apply a class name for the options list */}
                <li>{question.option1}</li>
                <li>{question.option2}</li>
                <li>{question.option3}</li>
                <li>{question.option4}</li>
              </ul>
              <strong className="correct-option">Correct Option:</strong> {question.correctoption}
              <br />
              <strong className="subject-label">Subject:</strong> {question.subject}
              <br />
              <strong className="class-label">Class:</strong> {question.vclass}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewTests;
