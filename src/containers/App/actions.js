import { LOGIN, ERROR_ADD } from './reducers';
// import { firebaseAppAuth } from '../../services/firebase/config';

export const error = ({ error }) => dispatch => {
  dispatch({ type: ERROR_ADD, payload: error }); // just credential?
}

export const login = ({ authResult }) => dispatch => {
  dispatch({ type: LOGIN, payload: authResult }); // just credential?
}

// export const loginFromLocalStorage = () => dispatch => {
//   firebaseAppAuth.getCredentialFromToken()
//     .then(credential => {
//       console.log('credential', credential);
//       dispatch({ type: LOGIN, payload: credential });
//     })
//     .catch(err => {
//       console.log("getCredentialFromToken error", err);
//       localStorage.clear();
//     });
// }
