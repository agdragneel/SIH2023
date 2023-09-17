/*export default function Lectures(props) {
  return (
    <div>
      <h4>Best Video Ever for {props.course},{props.class}</h4>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=tnX6N9f9nQDBqwBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}*/
import React, { useEffect, useState } from "react";

import ReactPlayer from 'react-player';
import axios from "axios";


function Lectures(props) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/videoapi")
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching video data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Video List</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <ReactPlayer
              url={video.vid_link} // URL of the video file
              controls={true} // Show video controls
              width="640px" // Set video width
              height="360px" // Set video height
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lectures;
