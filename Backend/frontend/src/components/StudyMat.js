import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StudyMat(props) {
  const [studmat, setStudmat] = useState([]);
  const [selectedStudmat, setSelectedStudmat] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/studmatapi")
      .then((response) => {
        setStudmat(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Studmat data:", error);
      });
  }, []);

  // Filter studmat based on props (case-insensitive comparison)
  const filteredstudmat = studmat.filter(
    (Studmat) =>
      Studmat.subject.toLowerCase() === props.course.toLowerCase() &&
      Studmat.vclass.toLowerCase() === props.class.toLowerCase()
  );

  // Handle Studmat selection from dropdown by title
  const handlestudmatelect = (event) => {
    const selectedTitle = event.target.value;
    const selectedStudmatInfo = studmat.find(
      (Studmat) => Studmat.title === selectedTitle
    );
    setSelectedStudmat(selectedStudmatInfo);
  };

  return (
    <div>
      <h1>Study Material List</h1>
      <div className="Studmat-select">
        <select onChange={handlestudmatelect}>
          <option value="" disabled selected>
            Select an Study Material
          </option>
          {filteredstudmat.map((Studmat) => (
            <option key={Studmat.id} value={Studmat.title}>
              {Studmat.title}
            </option>
          ))}
        </select>
      </div>
      {selectedStudmat && (
        <div className="selected-Studmat">
          <h2>{selectedStudmat.title}</h2>
          <p>{selectedStudmat.desc}</p>
          <a href={selectedStudmat.link} className="downloadbutton" target="_blank">Download Now</a>
        </div>
      )}
    </div>
  );
}
