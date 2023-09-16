import axios from "axios";
import React, { useState, useEffect } from "react";
import NavAnon from "./components/NavAnon";
import NavStu from "./components/NavStu";
import Home from "./components/Home"
import Courses from "./components/Courses"
import Faq from "./components/Faq";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

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
      </Routes>

    </Router>
    </>
  );
}

export default App;
