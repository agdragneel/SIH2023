import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnswerQuestions.css'; // Import your CSS stylesheet

const QuestionList = () => {
  const [testnames, setTestnames] = useState([]);
  const [selectedTestname, setSelectedTestname] = useState('');
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [score, setScore] = useState(null);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false); // Track whether responses have been submitted

  // Fetch unique test names from the API
  useEffect(() => {
    axios.get('http://localhost:8000/testquestions/')
      .then((response) => {
        const uniqueTestnames = Array.from(new Set(response.data.map((question) => `${question.testname} ${question.vclass} ${question.subject}`)));
        setTestnames(uniqueTestnames);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Fetch questions by selected test name
  useEffect(() => {
    if (selectedTestname) {
      const testNameParts = selectedTestname.split(' ');
      const testname = testNameParts[0];
      
      axios.get(`http://localhost:8000/testquestions/?testname=${testname}`)
        .then((response) => {
          const filter=selectedTestname.split(' ')[0];
          console.log("Filter:",filter)
          console.log("Received Response Data:",response.data);
          console.log("Selected Test Name:",selectedTestname)
          const filteredQuestions = response.data.filter(question => (question.testname === filter));
          
          console.log("Filtered Data:",filteredQuestions)
          setQuestions(filteredQuestions);
          // Clear previous responses, incorrect questions, and the submitted flag when changing the test name
          setResponses({});
          setIncorrectQuestions([]);
          setSubmitted(false);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // If no test name is selected, clear the questions
      setQuestions([]);
      // Also clear previous responses, incorrect questions, and the submitted flag
      setResponses({});
      setIncorrectQuestions([]);
      setSubmitted(false);
    }
  }, [selectedTestname]);

  const handleOptionChange = (questionId, selectedOption) => {
    if (!submitted) {
      setResponses({
        ...responses,
        [questionId]: selectedOption,
      });
    }
  };

  const handleSubmit = () => {
    // Calculate the score by comparing responses with correct answers
    let correctCount = 0;
    const incorrect = [];

    questions.forEach((question) => {
      if (responses[question.id] === question.correctoption) {
        correctCount++;
      } else {
        // Store incorrect questions and their correct answers
        incorrect.push({ question, correctAnswer: question.correctoption });
      }
    });

    setScore(correctCount);
    setIncorrectQuestions(incorrect);
    setSubmitted(true); // Mark responses as submitted
  };

  return (
    <div className="QuestionList">
      <h1 className="MainTitle">MCQ Test</h1>
      <div className="SelectTestName">
        <label>Select Test Name:</label>
        <select
          value={selectedTestname}
          onChange={(e) => {
            setSelectedTestname(e.target.value);
            setScore(null); // Clear the score when changing the test name
          }}
        >
          <option value="">Select a Test Name</option>
          {testnames.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {questions.length > 0 && (
        <div>
          {questions.map((question) => (
            <div
              key={question.id}
              className={`QuestionContainer ${
                submitted && responses[question.id] !== undefined
                  ? responses[question.id] === question.correctoption
                    ? 'CorrectAnswer'
                    : 'IncorrectAnswer'
                  : ''
              }`}
            >
              <p className="QuestionText">{question.quesdesc}</p>
              <div className="AnswerOption">
                <label>
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value={1}
                    checked={responses[question.id] === 1}
                    onChange={() => handleOptionChange(question.id, 1)}
                  />
                  {question.option1}
                </label>
              </div>
              <div className="AnswerOption">
                <label>
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value={2}
                    checked={responses[question.id] === 2}
                    onChange={() => handleOptionChange(question.id, 2)}
                  />
                  {question.option2}
                </label>
              </div>
              <div className="AnswerOption">
                <label>
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value={3}
                    checked={responses[question.id] === 3}
                    onChange={() => handleOptionChange(question.id, 3)}
                  />
                  {question.option3}
                </label>
              </div>
              <div className="AnswerOption">
                <label>
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value={4}
                    checked={responses[question.id] === 4}
                    onChange={() => handleOptionChange(question.id, 4)}
                  />
                  {question.option4}
                </label>
              </div>
            </div>
          ))}
          <button type="button" onClick={handleSubmit} className="SubmitButton">
            Submit
          </button>
        </div>
      )}
      {score !== null && (
        <div className="Results">
          <h3 className="ResultsTitle">Results</h3>
          <p className="Score">Your score: {score}/{questions.length}</p>
          {incorrectQuestions.length > 0 && (
            <div>
              <h4 className="IncorrectTitle">Incorrect Questions and Correct Answers</h4>
              <ul className="IncorrectQuestions">
                {incorrectQuestions.map((item, index) => (
                  <li key={index} className="IncorrectQuestionItem">
                    <p>{item.question.quesdesc}</p>
                    <p>Correct Answer: Option {item.correctAnswer}</p>
                  </li>
                ))}
              </ul>
            </div>
               )}
        </div>
      )}
    </div>
  );
}

export default QuestionList;
