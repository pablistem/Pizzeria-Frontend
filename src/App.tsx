import React from 'react';
import './App.css';
import { Login } from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <h1>Pizzeria Don Remolo</h1>
      <Routes>
        <Route path="/" element={<Login />} />{' '}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
