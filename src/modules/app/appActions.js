import { actionCreator } from 'helpers';
import { appConstants } from 'modules';
import * as api from 'modules/app/appApi';

const appActions = {
  setTheme: payload => actionCreator(appConstants.actions.SET_THEME, payload),
  setBannerContent: payload => actionCreator(appConstants.actions.SET_BANNER_CONTENT, payload),
  addNotification: payload => actionCreator(appConstants.actions.ADD_NOTIFICATION, payload),
  removeNotification: payload => actionCreator(appConstants.actions.REMOVE_NOTIFICATION, payload),
  clearNotifications: () => actionCreator(appConstants.actions.CLEAR_NOTIFICATIONS),

  sampleAPICall: (payload, callbacks) => {
    const args = { type: appConstants.actions.SAMPLE_API_CALL, payload, callbacks };
    return api.sampleAPICall(args);
  },
};

export { appActions };