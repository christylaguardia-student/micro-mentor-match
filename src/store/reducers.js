export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const ERROR_ADD = "ERROR_ADD";
export const ERROR_REMOVE = "ERROR_REMOVE";
export const LOGOUT = "LOGOUT";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const RESET_STORE = "RESET_STORE";
export const FETCHED_USER = "FETCHED_USER";

export function loading(state = false, { type }) {
  switch (type) {
    case LOADING:
    case LOGIN_START:
      return true;
    case LOADED:
      return false;
    default:
      return state;
  }
}

export function errors(state = null, { type, payload }) {
  switch (type) {
    case ERROR_ADD:
      return [state.errors, ...payload];
    case ERROR_REMOVE:
    default:
      return state;
  }
}

export function user(state = {}, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true, auth: payload };
    case FETCHED_USER:
      return { ...state, data: payload };
    case LOGOUT:
    case RESET_STORE:
      return null;
    default:
      return state;
  }
}
