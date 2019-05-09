import React from 'react';
import axios from 'axios';
import '../css/login.css'

import requiresAuth from '../auth/authHeader';

class Login extends React.Component {
    state = {
          username: "",
          password: ""
        };
      
        handleChange = e => {
          this.setState({
            [e.target.name]: e.target.value
          });
        }; 

        handleSubmit = e => {
          e.preventDefault();
          const credentials = this.state;
          console.log(this.state)
          axios
    
          .post("http://localhost:5000/api/auth/login", credentials)
    
          .then(res => {
            // save it to localStorage
            const token = res.data.token;
            localStorage.setItem("jwt", token);
            this.props.history.push("/users");
          })
    
          .catch(err => console.log('Login Error', err));
    
          };
    
        
        render() {
          return (
            <div className = "login-page">
              <div className= "design">
                  <div className = "orange-rectangle">
                      <div className = "welcome">Login</div>
                  </div>
                  <div className = "pale-rectangle"/>
                  <div className = "circle"/>
              </div>
              <div className = "login-input">
                <div className="spacing"></div>
                  <form className = "user-form" action="" onSubmit={this.handleSubmit}>
                        <input
                          type="text"
                          name="username"
                          onChange={this.handleChange}
                          value={this.state.username}
                          placeholder = "username (display name)"
                      />
                      <input
                          type="password"
                          name="password"
                          onChange={this.handleChange}
                          value={this.state.password}
                          placeholder = "password"
                      />
                  <button className="login">Login</button>
                  </form>
              </div>
            </div>
          );
        }
}

export default Login;
