import { tokenValid } from 'helpers';
import _ from 'lodash';

export let sessionCheck;

export const storeToken = (state, selectors, payload) => {
  if (!_.isEmpty(payload)) {
    const tokenName = state.get(selectors.STATE_KEY_TOKEN_NAME);
    localStorage.setItem(tokenName, payload.token);
  }
};

export const removeToken = tokenName => {
  const existingToken = localStorage.getItem(tokenName);
  if (existingToken) {
    localStorage.removeItem(tokenName);
  }
};

export const autoLogout = (token, logout, addNotification) => {
  if (token && !sessionCheck) {
    sessionCheck = setInterval(() => {
      const expired = !tokenValid(token);

      if (expired) {
        clearInterval(sessionCheck);
        logout?.();
        addNotification?.('Your session has expried.');
      }
    }, 1000)
  }
};