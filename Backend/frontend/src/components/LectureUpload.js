import React, { useState } from 'react';
import axios from 'axios';
import './LectureUpload.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

export default function LectureUpload(props) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [vclass, setVClass] = useState('');
  const [desc, setDesc] = useState('');
  const [vidLink, setVidLink] = useState('');
  const csrfToken = document.cookie
    .split(';')
    .find(cookie => cookie.trim().startsWith('csrftoken='))
    .split('=')[1];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      cap: `${vclass}-${subject}`,
      title,
      subject,
      vclass,
      desc,
      vid_link: vidLink,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/videoapi/', formData, {
        headers: {
          'X-CSRFToken': csrfToken,
          'Content-Type': 'application/json',
        },
      });

      console.log('Video link uploaded successfully:', response.data);
      navigate('/');
      // Clear form fields or show a success message as needed
    } catch (error) {
      console.error('Error uploading video link:', error);
      // Handle the error, show an error message, etc.
    }
  };

  return (
    <div className="lecture-upload-container">
      <h1>Video Link Upload</h1>
      <form onSubmit={handleSubmit} className="lecture-upload-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="vclass">Class:</label>
          <input
            type="text"
            id="vclass"
            value={vclass}
            onChange={(e) => setVClass(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description:</label>
          <textarea
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="vidLink">Video Link:</label>
          <input
            type="text"
            id="vidLink"
            value={vidLink}
            onChange={(e) => setVidLink(e.target.value)}
            className="form-control"
          />
        </div>

        <button type="submit" className="upload-button">
          Upload Video Link
        </button>
      </form>
    </div>
  );
}
