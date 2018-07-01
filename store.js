import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

window.i = 0;
console.log(window.i);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import reducer from './reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(sagas);

export default store;
