import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

import Register from './pages/Register';

import Login from './pages/Login';
import AuthProvider from './context/AuthContext';
/* import { IAuthContext } from './types/types'; */
import useRefresh from './hooks/useRefresh';

const App: React.FC = () => {
  /* const { isAuth } = useContext(AuthContext) as IAuthContext; */

  useRefresh();

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />{' '}
          <Route path="/register" element={<Register />} />{' '}
          <Route path="/login" element={<Login />} />{' '}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;
