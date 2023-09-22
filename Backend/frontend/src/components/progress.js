import React, { useState, useEffect } from "react";
import "./progress.css";
import axios from "axios";

const csrfToken = document.cookie
  .split(";")
  .find((cookie) => cookie.trim().startsWith("csrftoken="))
  .split("=")[1];

export default function Progressbar(props) {
  const [progress, setProgress] = useState(0);
  const [usna, setUsna] = useState('');

  const showColor = () => {
    if (progress < 40) return "#ff0000";
    else if (progress < 70) return "#ffa500";
    else return "#2eccf1";
  };

  useEffect(() => {
    // Fetch user progress data from Django backend
    axios
      .get("/currentuser/") // Replace with the actual API endpoint
      .then((response) => {
        console.log("Username Fetched:", response.data.username);
        setUsna(response.data.username);
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
      });
  }, []); // This useEffect runs only once to fetch the username

  useEffect(() => {
    // Fetch progress data using the obtained username and class
    if (usna === '') {
      // Wait until usna is set before making the request
      return;
    }

    axios
      .get(`http://127.0.0.1:8000/progressapi/`)
      .then((response) => {
        console.log(response.data);
        console.log("Username:", usna);
        console.log("Class:", props.class.toLowerCase());

        // Find the entry that matches props.course and props.subject
        const filteredProgress = response.data.find((progress) => (
          progress.vclass === props.class.toLowerCase() && progress.username === usna
        ));

        console.log("Filtered Data:", filteredProgress);

        if (filteredProgress) {
          console.log("Filtered Data Progress:", filteredProgress.percent);
          setProgress(filteredProgress.percent);
          console.log("Progress value:", progress);
        }
      })
      .catch((error) => {
        console.error("Error fetching user progress:", error);
      });
  }, [usna, props.class]);

  return (
    <div>
      <div className="Progresscontainer">
        <div className="progress-bar">
          <div
            className="progressBar-fill"
            style={{ width: `${progress}%`, backgroundColor: showColor() }}
          >
          </div>
        </div>
        <div className="progress-label">{progress}%</div>
      </div>
    </div>
  );
}
