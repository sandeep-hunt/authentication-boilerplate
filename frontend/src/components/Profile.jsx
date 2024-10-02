// Profile.jsx
import React from 'react';

const Profile = () => {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Welcome to your profile!</p>
      {/* Add user-specific information here */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;