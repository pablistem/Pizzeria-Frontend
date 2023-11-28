import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter, Routes y Route

import Register from './pages/Register';

import { Login } from './pages/Login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />{' '}
        {/* Ruta para la página de registro */}
        <Route path="/login" element={<Login />} />{' '}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
