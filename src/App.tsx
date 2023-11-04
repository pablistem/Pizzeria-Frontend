import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter, Routes y Route

import Register from './pages/Register';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Register />} /> {/* Ruta para la página de registro */}        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
