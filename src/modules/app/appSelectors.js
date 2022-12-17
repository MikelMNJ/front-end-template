import { appConstants } from 'modules';

const { selectors } = appConstants;

const appSelectors = {
  theme: state => state.app[selectors.STATE_KEY_THEME],
  bannerContent: state => state.app[selectors.STATE_KEY_BANNER_CONTENT],
  notifications: state => state.app[selectors.STATE_KEY_NOTIFICATIONS],
  sampleResponse: state => state.app[selectors.STATE_KEY_SAMPLE_RESPONSE],
};

export { appSelectors };