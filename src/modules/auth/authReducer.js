import { authConstants } from 'modules';
import { storeToken } from 'helpers';
import StateManager from 'state-wrangler';

const { REACT_APP_NAME: appName } = process.env;
const { actions, selectors } = authConstants;

const initial = {
  [selectors.STATE_KEY_TOKEN_NAME]: `${appName}_token`,
};

const authReducer = (initialState = initial, action = {}) => {
  const { meta, payload } = action;
  const state = new StateManager(initialState);

  switch(action.type) {
    case actions.CHECK_TOKEN:
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case actions.CREATE_USER:
      storeToken(state, selectors, payload);
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case actions.UPDATE_USER:
      storeToken(state, selectors, payload);
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case actions.DELETE_USER:
      return state.remove(selectors.STATE_KEY_USER_INFO);

    case actions.SEND_RESET_EMAIL:
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case actions.LOG_IN:
      storeToken(state, selectors, payload);
      console.log(payload);
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    default:
      return initialState;
  }
};

export { authReducer };