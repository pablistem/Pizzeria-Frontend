import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

//import Register from './pages/Register';

import { Login } from './pages/Login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />{' '}
        {/* <Route path="/" element={<Register />} />{' '} */}
        {/* Ruta para la página de registro */}
        <Route path="/login" element={<Login />} />{' '}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
