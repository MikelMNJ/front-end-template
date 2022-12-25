import { authConstants, appConstants } from 'modules';
import { updateLocalStorage } from 'helpers';
import StateManager from 'state-wrangler';

const { actions, selectors } = authConstants;
const { tokenParam } = appConstants;

const initial = {};

const authReducer = (initialState = initial, action = {}) => {
  const { meta, payload } = action;
  const state = new StateManager(initialState);

  switch(action.type) {
    case actions.CHECK_TOKEN:
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case actions.CREATE_USER:
      updateLocalStorage(tokenParam, payload.token);
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case actions.UPDATE_USER:
      updateLocalStorage(tokenParam, payload.token);
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case actions.DELETE_USER:
      return state.remove(selectors.STATE_KEY_USER_INFO);

    case actions.SEND_RESET_EMAIL:
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case actions.LOG_IN:
      updateLocalStorage(tokenParam, payload.token);
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    default:
      return initialState;
  }
};

export { authReducer };