import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Material Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Subject:</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div>
          <label>Class:</label>
          <input type="text" value={vclass} onChange={(e) => setVClass(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>
        <div>
          <label>Link:</label>
          <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
        <button type="submit">Upload Material</button>
      </form>
    </div>
  );
}
