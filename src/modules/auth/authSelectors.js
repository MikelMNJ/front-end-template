import { authConstants } from 'modules';

const { selectors } = authConstants;

const authSelectors = {
  tokenName: state => state.auth[selectors.STATE_KEY_TOKEN_NAME],
  userInfo: state => state.auth[selectors.STATE_KEY_USER_INFO],
};

export { authSelectors };