import React from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';

function App() {
  

  return (
    <div className="App">
      <header className="App-content">
        <h2>App</h2>

        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/peru'>Gifs de Perú</Link>
        <Link to='/gif/argentina'>Gifs de Argentina</Link>

        <Route
          component={ListOfGifs}
          path='/gif/:keyword'></Route>
      </header>
    </div>
  );
}

export default App;
