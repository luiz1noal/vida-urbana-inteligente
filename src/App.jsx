import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import { Home } from './pages/Home';
import { AdicionarLivros } from './Components/AdicionarLivros';
import './App.css';
import { Navbar } from './Components/navBar';

function App() {
  return (
    <>
      <div className='rotas-app'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/adicionar-livros' element={<AdicionarLivros />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
