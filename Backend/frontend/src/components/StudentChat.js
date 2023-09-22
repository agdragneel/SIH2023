import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentChat.css'
function StudentChat() {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const csrfToken = document.cookie
    .split(';')
    .find(cookie => cookie.trim().startsWith('csrftoken='))
    .split('=')[1];

  useEffect(() => {
    // Fetch the list of teachers from the '/rest/' endpoint
    axios.get('/rest/')
      .then((response) => {
        // Filter the teachers from the response based on their 'position'
        const teacherData = response.data.filter((user) => user.position === 'teacher');
        setTeachers(teacherData);
      })
      .catch((error) => {
        console.error('Error fetching teachers:', error);
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
    // Fetch chat messages between the current user and the selected teacher
    if (selectedTeacher) {
      axios.get(`/chat/?teacher_username=${selectedTeacher}&student_username=${currentUser.username}`)
        .then((response) => {
          setMessages(response.data);
        })
        .catch((error) => {
          console.error('Error fetching messages:', error);
        });
    }
  }, [selectedTeacher, currentUser]);

  const handleChangeTeacher = (event) => {
    setSelectedTeacher(event.target.value);
    setMessages([]); // Clear messages when a new teacher is selected
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
      teacher_username: selectedTeacher,
      student_username: currentUser.username,
      message: newMessage,
      sentby: currentUser.username, // Add the sentby field
    };

    // Simulate adding the new message to the list (for instant display)
    setMessages([...messages, newChatMessage]);
    setNewMessage('');

    // You can also send the message to your API to save it in the database
    axios.post('/chat/', newChatMessage,{
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
    <div className="student-chat-container">
  <h2>Student Chat</h2>
  <select className="teacher-dropdown" onChange={handleChangeTeacher}>
    <option value="">Select a Teacher</option>
    {teachers.map((teacher) => (
      <option key={teacher.id} value={teacher.username}>
        {teacher.username}
      </option>
    ))}
  </select>
  {selectedTeacher && (
    <div>
      <h3>Chat with {selectedTeacher}</h3>
      <div className="message-list">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sentby === currentUser.username ? 'student' : 'teacher'
            }`}
          >
            <p>
              {`${message.sentby === currentUser.username ? 'You: ' : message.sentby + ': '}${message.message}`}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmitMessage} className="message-form">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={handleNewMessageChange}
          className="message-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  )}
</div>
  );
}

export default StudentChat;
