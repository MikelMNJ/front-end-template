import { StateManager } from 'helpers';
import { appConstants } from 'modules';
import _ from 'lodash';

const { actions, selectors, theme } = appConstants;

const initial = {
  [selectors.STATE_KEY_THEME]: theme.light,
  [selectors.STATE_KEY_NOTIFICATIONS]: [],
};

const appReducer = (initialState = initial, action = {}) => {
  const { meta, payload } = action;
  const state = new StateManager(initialState);

  switch(action.type) {
    case actions.SET_THEME:
      return state.update(selectors.STATE_KEY_THEME, payload);

    case actions.SET_GLOBAL_BANNER:
      return state.add(selectors.STATE_KEY_GLOBAL_BANNER, payload);

    case actions.ADD_NOTIFICATION:
      const notifications = state.get(selectors.STATE_KEY_NOTIFICATIONS);
      const exists = notifications?.find(notification => _.isEqual(notification, payload));

      return !exists ? state.add(selectors.STATE_KEY_NOTIFICATIONS, payload) : initialState;

    case actions.REMOVE_NOTIFICATION:
      const index = payload;
      return state.remove(selectors.STATE_KEY_NOTIFICATIONS, index);

    case actions.CLEAR_NOTIFICATIONS:
      return state.update(selectors.STATE_KEY_NOTIFICATIONS, []);

    case actions.SAMPLE_API_CALL:
      return state.update(selectors.STATE_KEY_SAMPLE_RESPONSE, payload);

    default:
      return initialState;
  }
};

export { appReducer };