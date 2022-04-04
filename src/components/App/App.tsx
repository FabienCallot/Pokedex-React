import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { currentHeight, scrollToTop } from '../../hooks/scrollToTop';
import Button from '../Button/Button';
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
      {/* button scrollToTop it appears if height < breakpoint */}
      {breakpoint < height && (
        <Button
          clickEvent={() => {
            scrollToTop();
          }}
          className="button-to-top"
          text="&#8679;"
        />
      )}
    </div>
  );
}

export default App;
