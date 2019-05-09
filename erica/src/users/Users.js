import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/authHeader';

class Users extends React.Component {
  state = {
    users: [],
  };

  render() {
    return (
      <>
        hi
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
//     const endpoint = '/users';
//     // const endpoint = 'http://localhost:5000/api/users';
//     // const token = localStorage.getItem('jwt');
//     // const requestConfig = {
//     //   headers: {
//     //     authorization: token,
//     //   },
//     // };
    axios
      // .get(endpoint, requestConfig)
      .get('http://localhost:5000/api/user')
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => console.error(err));
  }
}

export default requiresAuth(Users);
