import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Register from './register/Register';
import Login from './login/Login';
import Users from './users/Users'
import './App.css';

function App(props) {
  function logout() {
    localStorage.removeItem('jwt');
    props.history.push('/');
  }


  return (
    <div>
      <header >
        <NavLink to="/">Login</NavLink>
        <button onClick={logout}>Logout</button>
        <NavLink to='/register'>Register</NavLink>
      </header>
      <main>
      <Route path="/register" component={Register} />
      <Route exact path="/" component={Login} />
      <Route exact path="/users" component={Users} />
        </main>
    </div>  
  );
}

export default withRouter(App);
