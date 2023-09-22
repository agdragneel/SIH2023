import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TeacherChat.css';

function TeacherChat() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const csrfToken = document.cookie
    .split(';')
    .find((cookie) => cookie.trim().startsWith('csrftoken='))
    .split('=')[1];

  useEffect(() => {
    // Fetch the list of students from the '/rest/' endpoint
    axios.get('/rest/')
      .then((response) => {
        // Filter the students from the response based on their 'position'
        const studentData = response.data.filter((user) => user.position === 'student');
        setStudents(studentData);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });

    // Fetch the current user's information (assuming you have an endpoint for it)
    axios.get('/currentuser/')
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching current user:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch chat messages between the current user (teacher) and the selected student
    if (selectedStudent) {
      axios.get(`/chat/?teacher_username=${currentUser.username}&student_username=${selectedStudent}`)
        .then((response) => {
          setMessages(response.data);
        })
        .catch((error) => {
          console.error('Error fetching messages:', error);
        });
    }
  }, [selectedStudent, currentUser]);

  const handleChangeStudent = (event) => {
    setSelectedStudent(event.target.value);
    setMessages([]); // Clear messages when a new student is selected
  };

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmitMessage = (event) => {
    event.preventDefault();
    if (newMessage.trim() === '') {
      return; // Don't send empty messages
    }

    // Create a new message object and add it to the messages state
    const newChatMessage = {
      teacher_username: currentUser.username,
      student_username: selectedStudent,
      message: newMessage,
    };

    // Simulate adding the new message to the list (for instant display)
    setMessages([...messages, newChatMessage]);
    setNewMessage('');

    // You can also send the message to your API to save it in the database
    axios.post('/chat/', newChatMessage, {
      headers: {
        'X-CSRFToken': csrfToken,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // Handle success if needed
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };

  return (
    <div className="teacher-chat-container">
      <h2>Teacher Chat</h2>
      <select className="student-dropdown" onChange={handleChangeStudent}>
        <option value="">Select a Student</option>
        {students.map((student) => (
          <option key={student.id} value={student.username}>
            {student.username}
          </option>
        ))}
      </select>
      {selectedStudent && (
        <div>
          <h3>Chat with {selectedStudent}</h3>
          <div className="message-list">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.student_username === currentUser.username ? 'student' : 'teacher'}`}>
                <p>{`${message.student_username === currentUser.username ? 'You: ' : message.student_username + ': '}${message.message}`}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmitMessage}>
            <input
              type="text"
              className="message-input"
              placeholder="Type your message..."
              value={newMessage}
              onChange={handleNewMessageChange}
            />
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TeacherChat;
