import axios from "axios";
import React, { useState, useEffect } from 'react'



function App() {

  const [details, setDetails] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Axios GET request to fetch data from the API
    axios.get('http://127.0.0.1:8000/currentuser')
      .then((res) => {
        setDetails(res.data);
        setIsLoading(false); // Data is loaded
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setIsLoading(false); // Loading failed
      });
  }, []);


return (
  <div className="app">
    <h1>Django Data</h1>
    <hr />
    {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
        <p>Currently Logged in User:</p>{details.username}
      </>
      )}
  </div>
);
}

export default App;