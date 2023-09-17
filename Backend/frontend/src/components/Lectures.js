import React, { useEffect, useState } from "react";
import './Lectures.css'
import ReactPlayer from 'react-player';
import axios from "axios";

function Lectures(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null); // State to store selected video URL
  const [selectedVideo, setSelectedVideo] = useState({ title: "", desc: "" }); // State to store selected video info
  const vidPrefix = props.class.toLowerCase() + '-' + props.course.toLowerCase();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/videoapi")
      .then(response => {
        const filteredVideos = response.data.filter(video => video.cap.startsWith(vidPrefix));
        setVideos(filteredVideos);
      })
      .catch((error) => {
        console.error("Error fetching video data:", error);
      });
  }, []);

  // Handle video selection from dropdown
  const handleVideoSelect = (event) => {
    const selectedVideoUrl = event.target.value;
    const selectedVideoInfo = videos.find(video => video.vid_link === selectedVideoUrl);

    setSelectedVideoUrl(selectedVideoUrl);
    setSelectedVideo(selectedVideoInfo);
  };

  return (
    <div>
      <h1>Video List</h1>
      <div className="video-select">
        <select onChange={handleVideoSelect}>
          <option value="" disabled selected>
            Select a Video
          </option>
          {videos.map((video) => (
            <option key={video.id} value={video.vid_link}>
              {video.title}
            </option>
          ))}
        </select>
      </div>
      {selectedVideoUrl && (
        <div className="video-player">
          <ReactPlayer
            url={selectedVideoUrl} // URL of the selected video
            controls={true} // Show video controls
            width="500px" // Set video width
            height="300px" // Set video height
          />
          <h2>{selectedVideo.title}</h2>
          <p>{selectedVideo.desc}</p>
        </div>
      )}
    </div>
  );
}

export default Lectures;
