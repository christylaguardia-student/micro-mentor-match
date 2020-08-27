import { combineReducers } from "redux";
import { loading, errors, user, RESET_STORE } from "../containers/App/reducers";

/* Import reducers */

const appReducer = combineReducers({
  loading,
  errors,
  user,
  /* Add reducers */
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
