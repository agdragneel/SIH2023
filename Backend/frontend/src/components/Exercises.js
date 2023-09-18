// Exercises.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import './Exercises.css';

export default function Exercises(props) {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/studexapi")
      .then((response) => {
        setExercises(response.data);
      })
      .catch((error) => {
        console.error("Error fetching exercise data:", error);
      });
  }, []);

  // Filter exercises based on props (case-insensitive comparison)
  const filteredExercises = exercises.filter(
    (exercise) =>
      exercise.subject.toLowerCase() === props.course.toLowerCase() &&
      exercise.vclass.toLowerCase() === props.class.toLowerCase()
  );

  // Handle exercise selection from dropdown by title
  const handleExerciseSelect = (event) => {
    const selectedTitle = event.target.value;
    const selectedExerciseInfo = exercises.find(
      (exercise) => exercise.title === selectedTitle
    );
    setSelectedExercise(selectedExerciseInfo);
  };

  return (
    <div className="Exercises">
      <h1 className="ExerciseTitle">Exercise List</h1>
      <div className="exercise-select">
        <select className="ExerciseSelect" onChange={handleExerciseSelect}>
          <option value="" disabled selected>
            Select an Exercise
          </option>
          {filteredExercises.map((exercise) => (
            <option key={exercise.id} value={exercise.title}>
              {exercise.title}
            </option>
          ))}
        </select>
      </div>
      {selectedExercise && (
        <div className="SelectedExercise">
          <h2>{selectedExercise.title}</h2>
          <p className="ExerciseDescription">{selectedExercise.desc}</p>
          <a href={selectedExercise.link} className="DownloadButton" target="_blank">Download Now</a>
        </div>
      )}
    </div>
  );
}
