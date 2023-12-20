import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

import Register from './pages/Register';

import Login from './pages/Login';
import { Navbar } from './components/Navbar/Navbar';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{' '}
        <Route path="/register" element={<Register />} />{' '}
        <Route path="/login" element={<Login />} />{' '}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
