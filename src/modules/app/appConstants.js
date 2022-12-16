
const appConstants = {
  actions: {
    SET_THEME: 'modules/app/SET_THEME',
    SET_GLOBAL_BANNER: 'modules/app/SET_GLOBAL_BANNER',
    ADD_NOTIFICATION: 'modules/app/ADD_NOTIFICATION',
    REMOVE_NOTIFICATION: 'modules/app/REMOVE_NOTIFICATION',
    CLEAR_NOTIFICATIONS: 'modules/app/CLEAR_NOTIFICATIONS',
    SAMPLE_API_CALL: 'modules/app/SAMPLE_API_CALL',
  },

  selectors: {
    STATE_KEY_THEME: 'theme',
    STATE_KEY_GLOBAL_BANNER: 'globalBanner',
    STATE_KEY_NOTIFICATIONS: 'notifications',
    STATE_KEY_SAMPLE_RESPONSE: 'sampleResponse',
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