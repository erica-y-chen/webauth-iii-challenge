import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Register from './register/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/register" component={Register} />

      </header>
    </div>
  );
}

export default App;
