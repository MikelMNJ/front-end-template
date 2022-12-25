import { authConstants, appConstants } from 'modules';
import { updateLocalStorage } from 'helpers';
import { request } from 'helpers/stateHelpers';
import StateManager from 'state-wrangler';

const { actions, selectors } = authConstants;
const { tokenParam } = appConstants;

const initial = {};

const authReducer = (initialState = initial, action = {}) => {
  const { meta, payload } = action;
  const state = new StateManager(initialState);

  switch(action.type) {
    case request(actions.CHECK_TOKEN).start:
      return state.update(selectors.STATE_KEY_USER_INFO_LOADING, payload);

    case actions.CHECK_TOKEN:
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case request(actions.CHECK_TOKEN).end:
      return state.update(selectors.STATE_KEY_USER_INFO_LOADING, payload);

    case actions.CREATE_USER:
      if (payload) updateLocalStorage(tokenParam, payload.token);
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case actions.UPDATE_USER:
      if (payload) updateLocalStorage(tokenParam, payload.token);
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case actions.DELETE_USER:
      return state.remove(selectors.STATE_KEY_USER_INFO);

    case actions.SEND_RESET_EMAIL:
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case request(actions.LOG_IN).start:
      return state.update(selectors.STATE_KEY_USER_INFO_LOADING, payload);

    case actions.LOG_IN:
      if (payload) updateLocalStorage(tokenParam, payload.token);
      return state.update(selectors.STATE_KEY_USER_INFO, payload);

    case request(actions.LOG_IN).end:
      return state.update(selectors.STATE_KEY_USER_INFO_LOADING, payload);

    default:
      return initialState;
  }
};

export { authReducer };