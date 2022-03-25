import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { currentHeight, scrollToTop } from '../../hooks/scrollToTop';
import Header from '../Header/Header';
import Home from '../Home/Home';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import PokemonTypes from '../Types/PokemonTypes';
import './app.scss';

function App() {
  //state for display or not the button scrollToTop
  const [height, setHeight] = useState(window.innerHeight);
  const breakpoint = 850;

  useEffect(() => {
    currentHeight(setHeight);
  }, []);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/types" element={<PokemonTypes />} />
      </Routes>
      {breakpoint < height && (
        <button onClick={scrollToTop} className="button button-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
}

export default App;
