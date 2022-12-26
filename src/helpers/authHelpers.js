import { tokenValid } from 'helpers';
import { appConstants } from 'modules';

export let sessionCheck;

export const removeToken = () => {
  const appName = appConstants.appName;
  const tokenParam = appConstants.tokenParam;
  const existingSettings = JSON.parse(localStorage.getItem(appName));

  // eslint-disable-next-line no-unused-vars
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
    }, 1000);
  }
};

export const cleanApp = () => {
  removeToken();
  clearInterval(sessionCheck);
  window.location.href = '/';
};