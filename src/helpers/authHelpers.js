import { tokenValid } from 'helpers';
import { appConstants } from 'modules';
import _ from 'lodash';

export let sessionCheck;

export const removeToken = () => {
  const appName = appConstants.appName;
  const tokenParam = appConstants.tokenParam;
  const existingSettings = JSON.parse(localStorage.getItem(appName));
  const { [tokenParam]: token, ...withoutToken } = existingSettings;

  localStorage.setItem(appName, JSON.stringify(withoutToken));
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