import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter, Routes y Route

import Register from './pages/Register';

import Login from './pages/Login';
import HomeTest from './pages/HomeTest';
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
          <Route path="/" element={<HomeTest />} />{' '}
          <Route path="/register" element={<Register />} />{' '}
          <Route path="/login" element={<Login />} />{' '}
          {/* <Route path="/home" element={<HomeTest/>} /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;
