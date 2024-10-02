
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  // Fetch user profile data from backend
  useEffect(() => {
    const token = localStorage.getItem('token');

    // Fetch user profile data from the server
    axios.get('http://localhost:5000/profile', {
      headers: { Authorization: token }
    })
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
        // In case of error (e.g., token expired), redirect to login
        navigate('/login');
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Welcome to your profile!</p>
      {/* Add user-specific information here */}
      {userData ? (
        <div>
          <p><strong>User ID:</strong> {userData.userId}</p>
          <p><strong>Message:</strong> {userData.message}</p>
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;