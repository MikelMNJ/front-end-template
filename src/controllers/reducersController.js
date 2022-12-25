import { appReducer, authReducer } from 'modules';

const reducers = {
  app: appReducer,
  auth: authReducer,
};

export { reducers };