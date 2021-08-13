import { SIGN_IN, SIGN_OUT, ERROR_SIGNING_IN } from "./types";
import { auth, provider } from "../firebase";
// import {history} from 'react-router-dom';

// let history = history();

let signIn = (res) => {
  return {
    type: SIGN_IN,
    payload: res,
  };
};

let errorSignIn = (err) => {
  return {
    type: ERROR_SIGNING_IN,
    payload: err,
  };
};

let signOut = () => {
  return {
    type: SIGN_OUT,
    payload: null,
  };
};

let signInThunk = () => (dispatch) => {
  auth
    .signInWithPopup(provider)
    .then((res) => {
      // history.push()
      dispatch(signIn(res));
    })
    .catch((err) => {
      dispatch(errorSignIn(err));
    });
};

export { signInThunk, signOut };
