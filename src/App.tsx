import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

import Register from './pages/Register';

import Login from './pages/Login';
import AuthProvider from './context/AuthContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
export default App;
