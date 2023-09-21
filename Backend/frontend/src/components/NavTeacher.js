import React from "react";
import './navTeacher.css';
export default function NavTeacher() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li class="dropdown">
              <a href="#">Courses Upload</a>
              <div class="dropdown-content">
                <a href="/lectureupload">Video Upload</a>
                <a href="/notesupload">Text Material Upload</a>
                <a href="materialupload">Exercise Upload</a>
                <a href="/mcqupload">Upload A Test</a>
              </div>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li class="dropdown">
              <a href="#">Dashboard</a>
              <div class="dropdown-content">
                {/* <a href="#">View Submissions</a> */}
                <a href="/profile">Profile</a>
                <a href="/mcqview">View Existing Tests</a>
                <a href="/logout">Logout</a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
