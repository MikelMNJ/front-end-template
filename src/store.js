import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiMiddleware } from 'middleware';

import {
  appReducer,
} from 'modules';

const rootReducer = combineReducers({
  app: appReducer,
});

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const devTools = process.env.NODE_ENV !== 'production' && reduxDevTools;
const middlewares = [ apiMiddleware ];

const handleMiddlewares = getDefaultMiddleWare => {
  const options = { serializableCheck: false };
  return getDefaultMiddleWare(options).concat(middlewares)
};

const storeConfig = {
  reducer: rootReducer,
  devTools,
  middleware: handleMiddlewares,
};

const store = configureStore(storeConfig);

export { store };