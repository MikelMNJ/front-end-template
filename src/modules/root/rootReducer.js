import { initialState, mainReducer } from 'store';
import { removeToken } from 'helpers';
import { rootConstants } from 'modules';

const rootReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case rootConstants.LOG_OUT:
      removeToken();
      return { ...initialState };

    default:
      return mainReducer(state, action);
  }
};

export { rootReducer };