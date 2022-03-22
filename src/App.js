import React, { Suspense } from 'react'
import './App.css';
import SearchResults from './pages/SearchResults'
import Details from './pages/Details';
import StaticContext from './context/StaticContext'

import { Route } from 'wouter';
import { GifsContextProvider } from './context/GifsContext';

const HomePage = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <StaticContext.Provider value={{name: 'Manuel', suscribete: true}}>
      <div className="App">
        <header className="App-content">
          <h2>App</h2>
          <Suspense fallback={null}>
            <GifsContextProvider>
              <Route component={HomePage} path="/"/>
              <Route component={SearchResults} path="/search/:keyword/:rating?" />
              <Route component={Details} path='/gif/:id' />
              <Route component={() => <h1>404 Error :c </h1> } path="/404" />
            </GifsContextProvider>
          </Suspense>
          
          
        </header>
      </div>
    </StaticContext.Provider>

    
  );
}

export default App;
