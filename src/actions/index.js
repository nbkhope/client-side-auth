import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

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
        // call another action creator from within this action creator
        dispatch(authError('Your login information is invalid'));
      });
  };
}

export function signupUser({ email, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then((response) => {
        console.log(response);

        dispatch({ type: AUTH_USER });

        localStorage.setItem('token', response.data.token);

        browserHistory.push('/feature');
      })
      .catch((error) => {
        // Axios API v0.13 changed,
        // so you have to use error.response instead of just response
        dispatch(authError(error.response.data.error));
      })
      ;
  };
}

// use separate action creator for error
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return {
    type: UNAUTH_USER
  };
}
