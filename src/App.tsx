import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

import Register from './pages/Register';

import { Login } from './pages/Login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />{' '}
        <Route path="/Register" element={<Register />} />{' '}
        {/* Ruta para la página de registro */}
        <Route path="/" element={<Login />} />{' '}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
