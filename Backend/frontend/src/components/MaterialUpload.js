import React, { useState } from 'react';
import axios from 'axios';
import './MaterialUpload.css'; // Import the CSS file

export default function MaterialUpload() {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [vclass, setVClass] = useState('');
  const [desc, setDesc] = useState('');
  const [link, setLink] = useState('');
  const csrfToken = document.cookie
    .split(';')
    .find(cookie => cookie.trim().startsWith('csrftoken='))
    .split('=')[1];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      subject,
      vclass,
      desc,
      link,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/studexapi/', formData, {
        headers: {
          'X-CSRFToken': csrfToken,
          'Content-Type': 'application/json',
        },
      });

      console.log('Material link uploaded successfully:', response.data);
      // Clear form fields or show a success message as needed
    } catch (error) {
      console.error('Error uploading material link:', error);
      // Handle the error, show an error message, etc.
    }
  };

  return (
    <div className="material-upload-container">
      <h1>Material Upload</h1>
      <form onSubmit={handleSubmit} className="material-upload-form">
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
          <label htmlFor="link">Link:</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="upload-button">
          Upload Material
        </button>
      </form>
    </div>
  );
}
