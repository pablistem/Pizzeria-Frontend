import React from 'react';

// import { Login } from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homeside } from './pages/Home';
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homeside />} />{' '}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
