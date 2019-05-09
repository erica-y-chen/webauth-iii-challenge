import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/authHeader';

class Register extends React.Component {
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
    
          .post("http://localhost:5000/api/auth/register", credentials)
    
          .then(res => {
            // save it to localStorage
            this.props.history.push("/");
            console.log()
          })
    
          .catch(err => console.log(err.response));
    
          };
    
        
        render() {
          return (
            <div className = "login-page">
              <div className= "design">
                  <div className = "orange-rectangle">
                      <div className = "welcome">Register</div>
                      <div className = "description">We're excited to have you! Go ahead and sign up to begin creating and finding new guides every day.</div>
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
                  <button className="login">Register</button>
                  </form>
              </div>
            </div>
          );
        }
}

export default Register;
