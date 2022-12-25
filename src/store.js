import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiMiddleware } from 'middleware';
import { makeInitialState } from 'helpers';

import {
  rootReducer,
  appReducer,
  authReducer,
} from 'modules';

const reducers = {
  // root: rootReducer,
  app: appReducer,
  auth: authReducer,
};

const initialState = makeInitialState(reducers);
const mainReducer = combineReducers(reducers);
const middleware = [ apiMiddleware ];

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const devTools = process.env.NODE_ENV !== 'production' && reduxDevTools;

const handleMiddleware = getDefaultMiddleWare => {
  const options = { serializableCheck: false };
  return getDefaultMiddleWare(options).concat(middleware)
};

const storeConfig = {
  reducer: mainReducer,
  devTools,
  middleware: handleMiddleware,
};

const store = configureStore(storeConfig);

export { store, mainReducer, initialState };