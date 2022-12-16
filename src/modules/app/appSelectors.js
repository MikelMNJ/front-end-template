import { appConstants } from 'modules';

const { selectors } = appConstants;

const appSelectors = {
  theme: state => state.app[selectors.STATE_KEY_THEME],
  globalBanner: state => state.app[selectors.STATE_KEY_GLOBAL_BANNER],
  notifications: state => state.app[selectors.STATE_KEY_NOTIFICATIONS],
  sampleResponse: state => state.app[selectors.STATE_KEY_SAMPLE_RESPONSE],
};

export { appSelectors };