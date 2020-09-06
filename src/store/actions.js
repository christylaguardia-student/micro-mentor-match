import {
  ERROR_ADD,
  SIGN_OUT,
  SIGN_IN_SUCCESS,
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  GET_USERS,
} from "./reducers";

export const addError = ({ error }) => dispatch => {
  dispatch({ type: ERROR_ADD, payload: error });
};

export const signInSuccess = ({ authUser }) => dispatch => {
  dispatch({ type: SIGN_IN_SUCCESS, payload: authUser?.user }); // or just credential?
};

// TODO: confirm the authUser is the user obj
export const createUserSuccess = ({ authUser }) => dispatch => {
  dispatch({ type: CREATE_USER_SUCCESS, payload: authUser });
};

// TODO: confirm the authUser is the user obj
export const updateUserSuccess = ({ authUser }) => dispatch => {
  dispatch({ type: UPDATE_USER_SUCCESS, payload: authUser });
};

export const getUsers = ({ users }) => dispatch => {
  dispatch({ type: GET_USERS, payload: users });
};

export const signOut = () => dispatch => {
  dispatch({ type: SIGN_OUT });
}
