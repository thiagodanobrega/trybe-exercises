import './App.css';
import Pokedex from './components/Pokedex';
import data from './data';

function App() {
  return (
    <div className="container">
      <h1>My favorite Pokemons</h1>
      <Pokedex pokemons={data} />
    </div>
  );
}

export default App;
