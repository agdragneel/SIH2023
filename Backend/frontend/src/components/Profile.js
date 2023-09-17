import React, { useState, useEffect } from 'react';
import './Profile.css'; // Add your CSS file for styling
import axios from 'axios'; // Import axios for making API requests

function Profile() {
  const [userDetails, setUserDetails] = useState([]);
  const [regDetails, setRegDetails] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // Store the current user data
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Axios GET request to fetch data from the API
    axios
      .get('http://127.0.0.1:8000/currentuser')
      .then((res) => {
        setUserDetails(res.data);
        setCurrentUser(res.data.username); // Store the current user's username
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  useEffect(() => {
    // Axios GET request to fetch data from the API
    axios
      .get('http://127.0.0.1:8000/rest')
      .then((res) => {
        setRegDetails(res.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  // Find the user's details based on the current username
  const currentUserDetails = regDetails.find((user) => user.username === currentUser);


  const profileImageURL =
    currentUserDetails && currentUserDetails.gender === 'Female'
      ? 'https://www.pngall.com/wp-content/uploads/5/Profile-Female-PNG.png'
      : 'https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png';


  if (loading) {
    return <p>Loading...</p>; // Display a loading indicator while data is being fetched
  }


  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={profileImageURL}
          alt="Profile"
          className="profile-image"
        />
        <h1>{currentUserDetails ? currentUserDetails.fname +' '+currentUserDetails.mname+' '+ currentUserDetails.lname : 'N/A'}</h1>
        <p>{currentUserDetails ? currentUserDetails.username : 'N/A'}</p>
        <p>Class:{currentUserDetails ? currentUserDetails.standard : 'N/A'}</p>
      </div>
      <div className="profile-settings">
        <h2>User Information</h2>
        {/* Add your profile settings and user options here */}
        <div className="profile-option">
        <p>Gender: {currentUserDetails ? currentUserDetails.gender : 'N/A'}</p>
          <p>Email: {currentUserDetails ? currentUserDetails.email : 'N/A'}</p>
          <p>Phone: {currentUserDetails ? currentUserDetails.phn : 'N/A'}</p>
          <p>Guardian Name: {currentUserDetails ? currentUserDetails.guard_name : 'N/A'}</p>
  
        </div>
        {/* Add more profile options as needed */}
      </div>
    </div>
  );
}

export default Profile;
