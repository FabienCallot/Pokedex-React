import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
