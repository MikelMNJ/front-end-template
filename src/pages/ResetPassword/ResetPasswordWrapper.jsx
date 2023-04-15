import { connect } from 'react-redux';
import { ResetPassword } from 'pages';
import { withTheme } from 'styled-components';
import { appSelectors, authSelectors, authActions } from 'modules';

const mapSelectorsToProps = state => {
  return {
    selectedTheme: appSelectors.selectedTheme(state),
    userInfo: authSelectors.userInfo(state),
  };
};

const mapActionsToProps = dispatch => {
  return {
    sendResetEmail: (payload, callbacks) => dispatch(authActions.sendResetEmail(payload, callbacks)),
  };
};

const Component = withTheme(ResetPassword);
const ResetPasswordWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { ResetPasswordWrapper };