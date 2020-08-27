import { LOADING, LOADED } from "../containers/App/reducers";

const isPromise = val => {
  return val && typeof val.then === "function";
};

/* Check if payload is a promise, resolve, fire async actions */
export default ({ dispatch }) => next => async action => {
  if (!isPromise(action.payload)) return next(action);
  dispatch({ type: LOADING });

  try {
    const result = await action.payload;
    dispatch({ type: action.type, payload: result });
    dispatch({ type: LOADED });
    return result;
  } catch (err) {
    throw err;
  }
};
