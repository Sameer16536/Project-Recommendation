import React from 'react';
import NavBar from '../components/NavBar';

const MyProfile: React.FC = () => {
  // Fetch user profile information and render it
  return (
    <div className="my-profile">
      <NavBar />
      <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
        <h2 className="text-2xl mb-4">My Profile</h2>
        <p>Name: {/* Render user name */}</p>
        <p>Email: {/* Render user email */}</p>
        <p>Phone: {/* Render user phone */}</p>
      </div>
    </div>
  );
};

export default MyProfile;
