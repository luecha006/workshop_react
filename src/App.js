import React from 'react';
import { NavLink } from 'react-router-dom';
import Routing from './routes';
import './App.css';

function App() {
  return (
    <div className="my-app">
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://devahoy.com">
              <img src={process.env.PUBLIC_URL + '/images/devahoy-text-logo.png'} alt="DEVAHOY LOGO" width="112" height="28" />
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <NavLink exact="true" to="/" >Home</NavLink>
              <NavLink to="/posts">Posts</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/about" >About</NavLink>
            </div>
          </div>
        </div>
      </nav>

      <Routing />
    </div>
  );
}

export default App;