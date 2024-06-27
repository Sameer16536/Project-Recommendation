import React from 'react';
import NavBar from '../components/NavBar';

const Admin: React.FC = () => {
  // Admin-specific functionality
  return (
    <div className="admin">
      <NavBar />
      <div className="max-w-7xl mx-auto mt-8">
        <h2 className="text-2xl mb-4">Admin Dashboard</h2>
        {/* Admin dashboard content */}
      </div>
    </div>
  );
};

export default Admin;
