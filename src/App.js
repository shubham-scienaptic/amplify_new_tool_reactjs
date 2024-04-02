import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ManageRoutes from './view/ManageRoutes';
import Home from './view/Home/Home';
import Commercial from './view/Commercial/Commercial';
import Retails from './view/Retail/Retails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ManageRoutes />}>
          <Route exact path='/' element={<Home />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/retail" element={<Retails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
