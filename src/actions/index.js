import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  // Submit email/pw to server

  // If all OK:
  //   update state (authenticated: true)
  //   save the token
  //   redirect to /feature Route
  // Otherwise:
  //   display an error to user

  // With redux-thunk, you return a function that has access to dispatch
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then((response) => {
        dispatch({ type: AUTH_USER });

        localStorage.setItem('token', response.data.token);

        // redirect to a different route programatically
        browserHistory.push('/feature');
      })
      .catch(() => {

      });
  };
}
