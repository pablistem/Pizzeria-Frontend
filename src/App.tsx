import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter, Routes y Route

import Register from './pages/Register';

import Login from './pages/Login';
import HomeTest from './pages/HomeTest';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTest />} />{' '}
        <Route path="/register" element={<Register />} />{' '}
        <Route path="/login" element={<Login />} />{' '}
        {/* <Route path="/home" element={<HomeTest/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
