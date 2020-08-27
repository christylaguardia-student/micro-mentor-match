import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import promiseMiddleware from './promiseMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, promiseMiddleware];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
