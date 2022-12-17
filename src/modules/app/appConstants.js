
const appConstants = {
  actions: {
    SET_THEME: 'modules/app/SET_THEME',
    SET_BANNER_CONTENT: 'modules/app/SET_BANNER_CONTENT',
    ADD_NOTIFICATION: 'modules/app/ADD_NOTIFICATION',
    REMOVE_NOTIFICATION: 'modules/app/REMOVE_NOTIFICATION',
    CLEAR_NOTIFICATIONS: 'modules/app/CLEAR_NOTIFICATIONS',
    SAMPLE_API_CALL: 'modules/app/SAMPLE_API_CALL',
  },

  selectors: {
    STATE_KEY_THEME: 'theme',
    STATE_KEY_BANNER_CONTENT: 'bannerContent',
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