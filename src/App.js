import React, { Suspense } from 'react'
import './App.css';
import SearchResults from './pages/SearchResults'
import Details from './pages/Details';
import Header from 'components/Header';
import Login from 'pages/Login';
import Register from 'pages/Register';
import logo from 'assets/logo2.png';

import { Route, Link } from 'wouter';
import { GifsContextProvider } from './context/GifsContext';
import { UserContextProvider } from 'context/UserContext';

const HomePage = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <UserContextProvider value={{name: 'Manuel', suscribete: true}}>
      <div className="App">
        <section className="App-content">
          <Header/>
          <Link to='/'>
            <img className='logo' src={logo} alt='logo' />
          </Link>
          <Suspense fallback={null}>
            <GifsContextProvider>
              <Route component={HomePage} path="/"/>
              <Route component={SearchResults} path="/search/:keyword/:rating?" />
              <Route component={Details} path='/gif/:id' />
              <Route component={Login} path='/login' />
              <Route component={Register} path='/register' />
              <Route component={() => <h1>404 Error :c </h1> } path="/404" />
            </GifsContextProvider>
          </Suspense>
        </section>
      </div>
    </UserContextProvider>

    
  );
}

export default App;
