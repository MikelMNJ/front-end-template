import _ from 'lodash';

const { REACT_APP_NAME } = process.env;

const appConstants = {
  actions: {
    SET_THEME: 'modules/app/SET_THEME',
    SET_BANNER_CONTENT: 'modules/app/SET_BANNER_CONTENT',
    ADD_NOTIFICATION: 'modules/app/ADD_NOTIFICATION',
    REMOVE_NOTIFICATION: 'modules/app/REMOVE_NOTIFICATION',
    CLEAR_NOTIFICATIONS: 'modules/app/CLEAR_NOTIFICATIONS',
    SET_MODAL_VISIBLE: 'modules/app/SET_MODAL_VISIBLE',
  },

  selectors: {
    STATE_KEY_SELECTED_THEME: 'selectedTheme',
    STATE_KEY_BANNER_CONTENT: 'bannerContent',
    STATE_KEY_NOTIFICATIONS: 'notifications',
    STATE_KEY_MODAL_VISIBLE: 'modalContent',
  },

  themes: {
    light: 'light',
    dark: 'dark',
  },

  messageTypes: {
    success: 'success',
    warning: 'warning',
    error: 'error',
    info: 'info',
    loading: 'loading',
  },

  appName: _.camelCase(REACT_APP_NAME),
  tokenParam: 'token',
  layouts: {
    full: { columns: 1, width: '70rem' },
    half: { columns: 2, width: '34rem' },
    third: { columns: 3, width: '22rem' },
    quarter: { columns: 4, width: '16rem' },
    sixth: { columns: 6, width: '10rem' },
    single: { columns: 12, width: '4rem' },
  },
};

export { appConstants };