import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const preloadedState = {
  starRatingReducer: {
    starObjArr: [
      {
        id: 0,
        starType: 'star-border',
        percentage: 12
      },
      {
        id: 1,
        starType: 'star-border',
        percentage: 15
      },
      {
        id: 2,
        starType: 'star-border',
        percentage: 20
      },
      {
        id: 3,
        starType: 'star-border',
        percentage: 22
      },
      {
        id: 4,
        starType: 'star-border',
        percentage: 25
      }
    ],
    percentage: 0
  },
  billTotalReducer: {
    billTotal: 0.0
  },
  tippersSelectionReducer: {
    arrowType: '',
    numOfTippers: 1
  },
  calculationReducer: {
    calculation: 0.0
  }
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  preloadedState,
  compose()
  // applyMiddleware(...middleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
