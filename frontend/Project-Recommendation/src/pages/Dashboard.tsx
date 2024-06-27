import React from 'react';
import NavBar from '../components/NavBar';

const Dashboard: React.FC = () => {
  // Fetch user projects and render them in a grid view with progress bars
  return (
    <div className="dashboard">
      <NavBar />
      <div className="max-w-7xl mx-auto mt-8">
        <h2 className="text-2xl mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Render projects */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
