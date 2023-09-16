// src/App.js
import React, { useState } from 'react';
import ClassCard from './components/ClassCard';
import CourseList from './components/CourseList';
import './App.css';

const classes = ['LKG', 'I', 'II', 'III', 'IV', 'V'];

function App() {  
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <div className="App">
      <header>
      <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/course">Courses</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign-Up</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li class="admin-control"><a href="/admin">Admin Control</a></li>
            </ul>
        </nav>
      </header>
      <main>
        {!selectedClass ? (
          <div className="class-selection">
            {classes.map((className) => (
              <ClassCard
                key={className}
                className={className}
                onSelect={setSelectedClass}
              />
            ))}
          </div>
        ) : (
          <CourseList subjects={['Math', 'Science', 'English', 'History']} />
        )}
      </main>

      <footer>
        <p>&copy; 2023 E-Learning. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default App;
