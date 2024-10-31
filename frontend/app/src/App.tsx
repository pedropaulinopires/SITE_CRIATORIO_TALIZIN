import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Administrativo from './pages/Administrativo';
import Home from './pages/Home';

export const App = () =>{
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/talizin-adm" element={<Administrativo/>} />
        </Routes>
    </BrowserRouter>
  )
}