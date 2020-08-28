import { LOGIN_START, LOGIN_SUCCESS, ERROR_ADD } from "./reducers";

export const error = ({ error }) => (dispatch) => {
  dispatch({ type: ERROR_ADD, payload: error });
};

export const loginSubmit = () => (dispatch) => {
  dispatch({ type: LOGIN_START })
};

export const loginSuccess = ({ authUser }) => (dispatch) => {
  dispatch({ type: LOGIN_SUCCESS, payload: authUser }); // or just credential?
};
