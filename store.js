//Redux store for entire application
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

//Array of middle to be used
const middleware = [thunk];

//Create store takes in Root Reducer, Initial State, and any Enhancers
const store = createStore(
  rootReducer,
  initialState
  //Use enhancers
  //   compose(
  //     applyMiddleware(...middleware),
  //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //   )
);

export default store;
