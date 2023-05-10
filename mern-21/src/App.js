import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from 'Develop/client/src/pages/SearchBooks';
import SavedBooks from 'Develop/client/src/pages/SavedBooks';
import Navbar from 'Develop/client/src/components/Navbar';

function App() {
    return (
        <Router>
            <>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={SearchBooks} />
                    <Route exact path='/saved' component={SavedBooks} />
                    <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
                </Switch>
            </>
        </Router>
    );
}

export default App;
