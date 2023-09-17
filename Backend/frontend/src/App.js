//App.js
import './App.css'
import axios from "axios";
import React, { useState, useEffect } from "react";
import NavAnon from "./components/NavAnon";
import NavStu from "./components/NavStu";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Faq from "./components/Faq";
import Footer from "./components/Footer"
import Profile from './components/Profile';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CourseMaterial from "./components/CourseMaterials";

function App() {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Axios GET request to fetch data from the API
    axios
      .get("http://127.0.0.1:8000/currentuser")
      .then((res) => {
        setDetails(res.data);
        setIsLoading(false); // Data is loaded
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setIsLoading(false); // Loading failed
      });
  }, []);

  return (
    <>
      <Router>
        <div className="app">{details.id ? <NavStu /> : <NavAnon />}</div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/check" element={<Home />} />
          <Route path="/lkg-math-course" element={<CourseMaterial course="Math" class="LKG"/>}></Route>
          <Route path="/lkg-science-course" element={<CourseMaterial course="Science" class="LKG"/>}></Route>
          <Route path="/lkg-english-course" element={<CourseMaterial course="English" class="LKG"/>}></Route>
          <Route path="/i-math-course" element={<CourseMaterial course="Math" class="I"/>}></Route>
          <Route path="/i-science-course" element={<CourseMaterial course="Science" class="I"/>}></Route>
          <Route path="/i-social-studies-course" element={<CourseMaterial course="Social Studies" class="I"/>}></Route>
          <Route path="/ii-science-course" element={<CourseMaterial course="Science" class="II"/>}></Route>
          <Route path="/ii-math-course" element={<CourseMaterial course="Math" class="II"/>}></Route>
          <Route path="/ii-social-studies-course" element={<CourseMaterial course="Social Studies" class="II"/>}></Route>
          <Route path="/iii-science-course" element={<CourseMaterial course="Science" class="III"/>}></Route>
          <Route path="/iii-math-course" element={<CourseMaterial course="Math" class="III"/>}></Route>
          <Route path="/iii-social-studies-course" element={<CourseMaterial course="Social Studies" class="III"/>}></Route>
          <Route path="/iii-history-course" element={<CourseMaterial course="History" class="III"/>}></Route>
          <Route path="/iv-science-course" element={<CourseMaterial course="Science" class="I"/>}></Route>
          <Route path="/iv-math-course" element={<CourseMaterial course="Math" class="I"/>}></Route>
          <Route path="/iv-social-studies-course" element={<CourseMaterial course="Social Studies" class="I"/>}></Route>
          <Route path="/iv-history-course" element={<CourseMaterial course="History" class="I"/>}></Route>
          <Route path="/v-science-course" element={<CourseMaterial course="Science" class="V"/>}></Route>
          <Route path="/v-math-course" element={<CourseMaterial course="Math" class="V"/>}></Route>
          <Route path="/v-social-studies-course" element={<CourseMaterial course="Social Studies" class="V"/>}></Route>
          <Route path="/v-history-course" element={<CourseMaterial course="History" class="V"/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          
        </Routes>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
