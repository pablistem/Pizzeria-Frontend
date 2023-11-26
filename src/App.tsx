import React from 'react';
// import { Login } from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homeside } from './pages/Home';

import './App.css';

import Register from './pages/Register';

import { Login } from './pages/Login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homeside />} />{' '}
        <Route path="/" element={<Register />} />{' '}
        {/* Ruta para la página de registro */}
        <Route path="login" element={<Login />} />{' '}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
