import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
          setQuestions(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedTestname]);

  return (
    <div>
      <h1>Question List</h1>
      <div>
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
      <div>
        <h3>Questions for Test: {selectedTestname}</h3>
        <ul>
          {questions.map((question) => (
            <li key={question.id}>
              <strong>Question Description:</strong> {question.quesdesc}
              <br />
              <strong>Options:</strong>
              <ul>
                <li>{question.option1}</li>
                <li>{question.option2}</li>
                <li>{question.option3}</li>
                <li>{question.option4}</li>
              </ul>
              <strong>Correct Option:</strong> {question.correctoption}
              <br />
              <strong>Subject:</strong> {question.subject}
              <br />
              <strong>Class:</strong> {question.vclass}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewTests;
