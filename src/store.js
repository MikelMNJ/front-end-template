import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducers } from 'controllers';
import { apiMiddleware } from 'middleware';
import { rootReducer } from 'modules';

const allReducers = { ...reducers, root: rootReducer };
const mainReducer = combineReducers(allReducers);
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

export { store };