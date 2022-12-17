
const appConstants = {
  actions: {
    SET_THEME: 'modules/app/SET_THEME',
    SET_BANNER_CONTENT: 'modules/app/SET_BANNER_CONTENT',
    ADD_NOTIFICATION: 'modules/app/ADD_NOTIFICATION',
    REMOVE_NOTIFICATION: 'modules/app/REMOVE_NOTIFICATION',
    CLEAR_NOTIFICATIONS: 'modules/app/CLEAR_NOTIFICATIONS',
  },

  selectors: {
    STATE_KEY_SELECTED_THEME: 'selectedTheme',
    STATE_KEY_BANNER_CONTENT: 'bannerContent',
    STATE_KEY_NOTIFICATIONS: 'notifications',
  },

  theme: {
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
};

export { appConstants };