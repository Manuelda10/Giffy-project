import React from 'react'
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults'
import Details from './pages/Details';
import StaticContext from './context/StaticContext'

import { Link, Route } from 'wouter';
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    <StaticContext.Provider value={{name: 'Manuel', suscribete: true}}>
      <div className="App">
        <header className="App-content">
          <h2>App</h2>

          <GifsContextProvider>
            <Route component={Home} path="/"/>
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Details} path='/gif/:id' />
          </GifsContextProvider>
          
        </header>
      </div>
    </StaticContext.Provider>

    
  );
}

export default App;
