import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { currentHeight, scrollToTop } from '../../hooks/scrollToTop';
import Header from '../Header/Header';
import Home from '../Home/Home';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import PokemonTypes from '../PokemonTypes/PokemonTypes';
import './app.scss';

function App() {
  //state for display or not the button scrollToTop
  const intFrameHeight: number = window.innerHeight;
  const [height, setHeight] = useState<number>(intFrameHeight);

  // for the 4k monitor, need hight breakpoint
  let breakpoint: number = 850;
  if (intFrameHeight > 850) {
    breakpoint = 1330;
  }
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
