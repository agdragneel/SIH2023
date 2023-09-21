import React, { useState } from 'react';
import axios from 'axios';
import './UploadQuestions.css'

const QuestionForm = () => {
  const [testname, setTestname] = useState('');
  const [subject, setSubject] = useState('');
  const [vclass, setVClass] = useState('');
  const [question, setQuestion] = useState({
    quesdesc: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correctoption: 1,
  });

  const csrfToken = document.cookie
    .split(';')
    .find((cookie) => cookie.trim().startsWith('csrftoken='))
    .split('=')[1];

  const handleQuestionChange = (field, value) => {
    setQuestion({
      ...question,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    const data = {
      testname,
      subject,
      vclass,
      quesdesc: question.quesdesc,
      option1: question.option1,
      option2: question.option2,
      option3: question.option3,
      option4: question.option4,
      correctoption: question.correctoption,
    };

    try {
      await axios.post('http://localhost:8000/testquestions/', data, {
        headers: {
          'X-CSRFToken': csrfToken,
          'Content-Type': 'application/json',
        },
      });
      alert('Question added successfully!');
      // Clear the form fields after successful submission
      setTestname('');
      setSubject('');
      setVClass('');
      setQuestion({
        quesdesc: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        correctoption: 1,
      });
    } catch (error) {
      console.error(error);
      alert('Failed to add the question.');
    }
  };

  return (
    <div>
      <h1>Add a Question</h1>
      <div>
        <label>Test Name:</label>
        <input type="text" value={testname} onChange={(e) => setTestname(e.target.value)} />
      </div>
      <div>
        <label>Subject:</label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div>
        <label>Class:</label>
        <input type="text" value={vclass} onChange={(e) => setVClass(e.target.value)} />
      </div>
      <h3>Question</h3>
      <div>
        <label>Question Description:</label>
        <textarea
          value={question.quesdesc}
          onChange={(e) => handleQuestionChange('quesdesc', e.target.value)}
        />
      </div>
      <div>
        <label>Option 1:</label>
        <input
          type="text"
          value={question.option1}
          onChange={(e) => handleQuestionChange('option1', e.target.value)}
        />
      </div>
      <div>
        <label>Option 2:</label>
        <input
          type="text"
          value={question.option2}
          onChange={(e) => handleQuestionChange('option2', e.target.value)}
        />
      </div>
      <div>
        <label>Option 3:</label>
        <input
          type="text"
          value={question.option3}
          onChange={(e) => handleQuestionChange('option3', e.target.value)}
        />
      </div>
      <div>
        <label>Option 4:</label>
        <input
          type="text"
          value={question.option4}
          onChange={(e) => handleQuestionChange('option4', e.target.value)}
        />
      </div>
      <div>
        <label>Correct Option:</label>
        <select
          value={question.correctoption}
          onChange={(e) => handleQuestionChange('correctoption', parseInt(e.target.value))}
        >
          <option value={1}>Option 1</option>
          <option value={2}>Option 2</option>
          <option value={3}>Option 3</option>
          <option value={4}>Option 4</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Add Question</button>
    </div>
  );
};

export default QuestionForm;
