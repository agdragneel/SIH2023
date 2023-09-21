import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import axios from "axios";
import './Lectures.css';

function Lectures(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState({ title: "", desc: "", subject: "", vclass: "" });
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(""); // State to store new comment text
  const [details, setDetails] = useState([]);
  
  const csrfToken = document.cookie
    .split(';')
    .find(cookie => cookie.trim().startsWith('csrftoken='))
    .split('=')[1];

  const vidPrefix = props.class.toLowerCase() + '-' + props.course.toLowerCase();

  useEffect(() => {
    // Fetch Username
    axios
      .get("http://127.0.0.1:8000/currentuser")
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
    // Fetch videos
    axios
      .get("http://127.0.0.1:8000/videoapi")
      .then(response => {
        const filteredVideos = response.data.filter(video => video.cap.startsWith(vidPrefix));
        setVideos(filteredVideos);
      })
      .catch((error) => {
        console.error("Error fetching video data:", error);
      });
  }, [props.class, props.course]);

  useEffect(() => {
    // Fetch comments for the selected video when it changes
    if (selectedVideoUrl) {
      axios
        .get("http://127.0.0.1:8000/comment", {
          params: {
            video_title: selectedVideo.title,
            subject: selectedVideo.subject,
            vclass: selectedVideo.vclass,
          }
        })
        .then(response => {
          console.log("Selected Video Title is:",selectedVideo.title)
          const filteredComments = response.data.filter(comment => (comment.video_title === selectedVideo.title)); //Added by AG
          setComments(filteredComments); //Added by AG 
          console.log("Response Data:",response.data)
          console.log("Filtered Comment data is:",filteredComments)
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
        });
    }
  }, [selectedVideo]);

  // Handle video selection from dropdown
  const handleVideoSelect = (event) => {
    const selectedVideoUrl = event.target.value;
    const selectedVideoInfo = videos.find(video => video.vid_link === selectedVideoUrl);

    setSelectedVideoUrl(selectedVideoUrl);
    setSelectedVideo(selectedVideoInfo);
  };

  // Handle posting a new comment
  const handlePostComment = () => {
    if (newComment.trim() === "") {
      return; // Don't post empty comments
    }

    const commentData = {
      username: details.username, // Replace with the actual logged-in user's username
      video_title: selectedVideo.title,
      subject: selectedVideo.subject,
      vclass: selectedVideo.vclass,
      content: newComment,
    };

    axios
      .post("http://127.0.0.1:8000/comment/", commentData,{
        headers: {
          'X-CSRFToken': csrfToken,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        // Add the new comment to the comments state
        setComments([...comments, response.data]);
        setNewComment(""); // Clear the comment input field
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
      });
  };

  return (
    <div className="Lectures">
      <h1 className="LectureTitle">Video List</h1>
      <div className="video-select">
        <select className="VideoSelect" onChange={handleVideoSelect}>
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
        <div className="video-container">
          <ReactPlayer
            url={selectedVideoUrl}
            controls={true}
            width="100%"
            height="100%"
          />
          <div className="video-info">
            <h2>{selectedVideo.title}</h2>
            <p>{selectedVideo.desc}</p>
          </div>
          <div className="comment-section">
            <h3>Comments</h3>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.username}:</strong> {comment.content}
                </li>
              ))}
            </ul>
            <div className="comment-input">
              <textarea
                rows="3"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={handlePostComment}>Post Comment</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lectures;
