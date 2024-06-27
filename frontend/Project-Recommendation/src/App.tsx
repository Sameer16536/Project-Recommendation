import React from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyProfile from './pages/MyProfile';
import ContactUs from './pages/ContactUs';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Guide from './pages/Guide';
import Admin from './pages/Admin';

const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/myprofile" Component={MyProfile} />
        <Route path="/contactus" Component={ContactUs} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/project" Component={Project} />
        <Route path="/project/:projectId/guide" Component={Guide} />
        <Route path="/admin" Component={Admin} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
