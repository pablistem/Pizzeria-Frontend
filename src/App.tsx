import React, { createContext, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

import Register from './pages/Register';

import Login from './pages/Login';
import Profile from './pages/Profile';
import UnuthenticatedProfile from './pages/UnuthenticatedProfile';

// eslint-disable-next-line react-refresh/only-export-components
export const valueContext = createContext(0);

const App: React.FC = () => {
  const [prueba, setPrueba] = useState(['1', '2', '3']);
  return (
    <valueContext.Provider value={{ prueba, setPrueba }}>
      <BrowserRouter>
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
    </valueContext.Provider>
  );
};
export default App;
