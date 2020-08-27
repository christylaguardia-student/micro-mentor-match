import { LOGIN, ERROR_ADD } from "./reducers";

export const error = ({ error }) => (dispatch) => {
  dispatch({ type: ERROR_ADD, payload: error });
};

export const login = ({ users }) => (dispatch) => {
  dispatch({ type: LOGIN, payload: users }); // or just credential?
};
