import './app.scss';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

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
