import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Courses from './components/Courses';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Profile from './components/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseMaterial from './components/CourseMaterials';
import NavTeacher from './components/NavTeacher';
import NavStu from './components/NavStu';
import NavAnon from './components/NavAnon';
import MaterialUpload from './components/MaterialUpload';
import NotesUpload from './components/NotesUpload';
import LectureUpload from './components/LectureUpload';
import UploadQuestions from './components/UploadQuestions'
import AnswerQuestions from './components/AnswerQuestions'
import ViewTests from './components/ViewTests';
import Feedback from './components/Feedback';

function App() {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [regDetails, setRegDetails] = useState([]);

  useEffect(() => {
    // Axios GET request to fetch data from the currentuser API
    axios
      .get('http://127.0.0.1:8000/currentuser')
      .then((res) => {
        setDetails(res.data);
        setIsLoading(false); // Data is loaded
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setIsLoading(false); // Loading failed
      });
  }, []);

  useEffect(() => {
    // Axios GET request to fetch data from the rest API
    axios
      .get('http://127.0.0.1:8000/rest')
      .then((res) => {
        setRegDetails(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  // Find the user's details based on the current username
  const currentUserDetails = regDetails.find((user) => user.username === details.username);
  const userRole = currentUserDetails ? currentUserDetails.position : 'anon';
  

  return (
    <>
      <Router>
      {userRole === 'teacher' ? <NavTeacher /> : userRole === 'student' ? <NavStu /> : <NavAnon />}
        <div className="app">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/check" element={<Home />} />
          <Route path="/lkg-math-course" element={<CourseMaterial course="Math" class="LKG" subjectcount="3"/>}></Route>
          <Route path="/lkg-science-course" element={<CourseMaterial course="Science" class="LKG" subjectcount="3"/>}></Route>
          <Route path="/lkg-english-course" element={<CourseMaterial course="English" class="LKG" subjectcount="3"/>}></Route>
          <Route path="/i-math-course" element={<CourseMaterial course="Math" class="I" subjectcount="3"/>}></Route>
          <Route path="/i-science-course" element={<CourseMaterial course="Science" class="I" subjectcount="3"/>}></Route>
          <Route path="/i-social-studies-course" element={<CourseMaterial course="Social Studies" class="I" subjectcount="3"/>}></Route>
          <Route path="/ii-science-course" element={<CourseMaterial course="Science" class="II" subjectcount="3"/>}></Route>
          <Route path="/ii-math-course" element={<CourseMaterial course="Math" class="II" subjectcount="3"/>}></Route>
          <Route path="/ii-social-studies-course" element={<CourseMaterial course="Social Studies" class="II" subjectcount="3"/>}></Route>
          <Route path="/iii-science-course" element={<CourseMaterial course="Science" class="III" subjectcount="4"/>}></Route>
          <Route path="/iii-math-course" element={<CourseMaterial course="Math" class="III" subjectcount="4"/>}></Route>
          <Route path="/iii-social-studies-course" element={<CourseMaterial course="Social Studies" class="III" subjectcount="3"/>}></Route>
          <Route path="/iii-history-course" element={<CourseMaterial course="History" class="III" subjectcount="4"/>}></Route>
          <Route path="/iv-science-course" element={<CourseMaterial course="Science" class="I" subjectcount="4"/>}></Route>
          <Route path="/iv-math-course" element={<CourseMaterial course="Math" class="I" subjectcount="4"/>}></Route>
          <Route path="/iv-social-studies-course" element={<CourseMaterial course="Social Studies" class="I" subjectcount="4"/>}></Route>
          <Route path="/iv-history-course" element={<CourseMaterial course="History" class="I" subjectcount="4"/>}></Route>
          <Route path="/v-science-course" element={<CourseMaterial course="Science" class="V" subjectcount="4"/>}></Route>
          <Route path="/v-math-course" element={<CourseMaterial course="Math" class="V" subjectcount="4"/>}></Route>
          <Route path="/v-social-studies-course" element={<CourseMaterial course="Social Studies" class="V" subjectcount="4"/>}></Route>
          <Route path="/v-history-course" element={<CourseMaterial course="History" class="V" subjectcount="4"/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/materialupload" element={<MaterialUpload/>}></Route>
          <Route path="/notesupload" element={<NotesUpload/>}></Route>
          <Route path="/lectureupload" element={<LectureUpload/>}></Route>
          <Route path="/mcqupload" element={<UploadQuestions/>}></Route>
          <Route path="/mcqanswer" element={<AnswerQuestions/>}></Route>
          <Route path="/mcqview" element={<ViewTests/>}></Route>
          <Route path="/feedbackUpload" element={<Feedback/>}></Route>

          </Routes>
        </div>

        <Footer />
        
      </Router>
    </>
  );
}

export default App;
