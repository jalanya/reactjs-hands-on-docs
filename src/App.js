import React from 'react';
import logo from './logo.svg';
import './App.css';
import Context from './context';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
}
from 'react-router-dom';

function Menu() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/context' className="App-link">Context</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/context">
          <Context />
        </Route>
      </Switch>
    </Router>
  );
}
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
        <Menu />
      </header>
    </div>
  );
}

export default App;
