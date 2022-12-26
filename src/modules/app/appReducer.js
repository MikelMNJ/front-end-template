import { appConstants } from 'modules';
import { updateLocalStorage, getLocalStorageSetting } from 'helpers/utilityHelpers';
import StateManager from 'state-wrangler';
import _ from 'lodash';

const { actions, selectors, themes } = appConstants;
const savedTheme = getLocalStorageSetting(selectors.STATE_KEY_SELECTED_THEME);

const initial = {
  [selectors.STATE_KEY_SELECTED_THEME]: savedTheme || themes.light,
  [selectors.STATE_KEY_NOTIFICATIONS]: [],
  [selectors.STATE_KEY_BANNER_CONTENT]: 'Welcome to your new app!',
};

const appReducer = (initialState = initial, action = {}) => {
  const { payload } = action;
  const state = new StateManager(initialState);

  switch(action.type) {
    case actions.SET_THEME:
      updateLocalStorage(selectors.STATE_KEY_SELECTED_THEME, payload);
      return state.update(selectors.STATE_KEY_SELECTED_THEME, payload);

    case actions.SET_BANNER_CONTENT:
      return state.add(selectors.STATE_KEY_BANNER_CONTENT, payload);

    case actions.ADD_NOTIFICATION:
      const notifications = state.get(selectors.STATE_KEY_NOTIFICATIONS);
      const exists = notifications?.find(notification => _.isEqual(notification, payload));

      return !exists ? state.add(selectors.STATE_KEY_NOTIFICATIONS, payload) : initialState;

    case actions.REMOVE_NOTIFICATION:
      const index = payload;
      return state.remove(selectors.STATE_KEY_NOTIFICATIONS, index);

    case actions.CLEAR_NOTIFICATIONS:
      return state.update(selectors.STATE_KEY_NOTIFICATIONS, []);

    case actions.SET_MODAL_VISIBLE:
      return state.update(selectors.STATE_KEY_MODAL_VISIBLE, payload);

    default:
      return initialState;
  }
};

export { appReducer };