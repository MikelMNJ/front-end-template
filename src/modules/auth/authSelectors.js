import { authConstants } from 'modules';

const { selectors } = authConstants;

const authSelectors = {
  userInfo: state => state.auth[selectors.STATE_KEY_USER_INFO],
};

export { authSelectors };