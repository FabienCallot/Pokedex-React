import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import PokemonTypes from '../Types/PokemonTypes';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/types" element={<PokemonTypes />} />
      </Routes>
    </div>
  );
}

export default App;
