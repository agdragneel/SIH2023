import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';

function Profile() {
  const [userDetails, setUserDetails] = useState([]);
  const [regDetails, setRegDetails] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [badges, setBadges] = useState([]);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/currentuser')
      .then((res) => {
        setUserDetails(res.data);
        setCurrentUser(res.data.username);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/rest')
      .then((res) => {
        setRegDetails(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/badges')
      .then((res) => {
        setBadges(res.data);
      })
      .catch((err) => {
        console.error('Error fetching badges:', err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/progressapi')
      .then((res) => {
        setProgress(res.data);
      })
      .catch((err) => {
        console.error('Error fetching progress:', err);
      });
  }, []);

  const currentUserDetails = regDetails.find((user) => user.username === currentUser);

  const profileImageURL =
    currentUserDetails && currentUserDetails.gender === 'Female'
      ? 'https://www.pngall.com/wp-content/uploads/5/Profile-Female-PNG.png'
      : 'https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png';

  const renderBadges = () => {
    // Filter progress data based on the user's username and class (vclass)
    console.log("Current User Detials",currentUserDetails)
    console.log("Progress",progress)
    const filteredProgress = progress.filter(
      (item) => item.username === currentUserDetails.username && item.vclass === currentUserDetails.standard.toLowerCase()
    );
      console.log("Filtered PRogress",filteredProgress)
    return badges.map((badge) => {
      const currentUserProgress = filteredProgress.find(
        (item) => {
          // Modify these conditions based on your progress data properties
          return (
            item.vclass === badge.vclass && // Assuming badge.subject corresponds to the progress key
            item.percent !== undefined // Make sure percent is defined in progress
          );
        }
      );

      let badgeImageURL;

      if (currentUserProgress) {
        if (currentUserProgress.percent > 80) {
          badgeImageURL = badge.image_link_1;
        } else if (currentUserProgress.percent > 60) {
          badgeImageURL = badge.image_link_2;
        } else {
          badgeImageURL = badge.image_link_3;
        }
      } else {
        // Handle the case when currentUserProgress is undefined
        badgeImageURL = badge.image_link_3; // Provide a default badge image URL
      }

      return (
        <div key={badge.id} className="badge-container">
          <img src={badgeImageURL} alt="Badge" className="badge-image" />
          <p>{badge.description}</p>
        </div>
      );
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profileImageURL} alt="Profile" className="profile-image" />
        <h1>
          {currentUserDetails
            ? currentUserDetails.fname + ' ' + currentUserDetails.mname + ' ' + currentUserDetails.lname
            : 'N/A'}
        </h1>
        <p>{currentUserDetails ? currentUserDetails.username : 'N/A'}</p>
        {currentUserDetails && currentUserDetails.position === 'teacher' ? (
          <p>Teacher</p>
        ) : (
          <p>Class:{currentUserDetails ? currentUserDetails.standard : 'N/A'}</p>
        )}
      </div>
      <div className="profile-settings">
        <h2>User Information</h2>
        <div className="profile-option">
          <p>Gender: {currentUserDetails ? currentUserDetails.gender : 'N/A'}</p>
          <p>Email: {currentUserDetails ? currentUserDetails.email : 'N/A'}</p>
          {currentUserDetails && currentUserDetails.position === 'teacher' ? (
            <>
              {/* Additional teacher-specific fields if needed */}
            </>
          ) : (
            <>
              <p>Phone: {currentUserDetails ? currentUserDetails.phn : 'N/A'}</p>
              <p>Guardian Name: {currentUserDetails ? currentUserDetails.guard_name : 'N/A'}</p>
            </>
          )}
        </div>
      </div>
      <div className="profile-badges">
        <h2>Badges</h2>
        {renderBadges()}
      </div>
    </div>
  );
}

export default Profile;
