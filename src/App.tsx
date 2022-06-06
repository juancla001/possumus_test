
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import DetallePersonaje from './components/DetallePersonaje'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from 'react';


function App() {


  return (
    <>
      <NavBar />
      
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detalle" element={<DetallePersonaje />} />
            </Routes>
          </BrowserRouter>

    </>
  );
}

export default App;
