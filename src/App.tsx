import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

import Register from './pages/Register';

import Login from './pages/Login';

import { Navbar } from './components/Navbar/Navbar';

import Profile from './pages/Profile';
import UnuthenticatedProfile from './pages/UnuthenticatedProfile';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{' '}
        <Route path="/register" element={<Register />} />{' '}
        <Route path="/login" element={<Login />} />{' '}
        <Route path="/profile" element={<Profile />} />{' '}
        <Route
          path="/unauthenticated-profile"
          element={<UnuthenticatedProfile />}
        />{' '}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
