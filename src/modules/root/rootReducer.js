import { initialState, mainReducer } from 'store';
import { removeToken } from 'helpers';
import { rootConstants } from 'modules';

const { REACT_APP_NAME: appName } = process.env;

const rootReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case rootConstants.LOG_OUT:
      const tokenName = `${appName}_token`;
      removeToken(tokenName);
      return { ...initialState };

    default:
      return mainReducer(state, action);
  }
};

export { rootReducer };