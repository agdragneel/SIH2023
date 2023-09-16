import axios from "axios";
import React, { useState, useEffect } from "react";

export default function NavStu() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    // Axios GET request to fetch data from the API
    axios
      .get("http://127.0.0.1:8000/currentuser")
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/course">Courses</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li class="dashboard">
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="userdisp">{details.username}</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
