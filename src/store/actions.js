import {
  ERROR_ADD,
  LOGIN_SUCCESS,
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  GET_USERS,
} from "./reducers";

export const addError = ({ error }) => dispatch => {
  dispatch({ type: ERROR_ADD, payload: error });
};

export const loginSuccess = ({ authUser }) => dispatch => {
  dispatch({ type: LOGIN_SUCCESS, payload: authUser }); // or just credential?
};

export const createUserSuccess = ({ authUser }) => dispatch => {
  dispatch({ type: CREATE_USER_SUCCESS, payload: authUser });
};

export const updateUserSuccess = ({ authUser }) => dispatch => {
  dispatch({ type: UPDATE_USER_SUCCESS, payload: authUser });
};

export const getUsers = ({ users }) => dispatch => {
  dispatch({ type: GET_USERS, payload: users });
};
