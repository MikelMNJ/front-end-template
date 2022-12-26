import { connect } from 'react-redux';
import { ResetPassword } from 'scenes';
import { withTheme } from 'styled-components';
import { appSelectors, appActions, authActions } from 'modules';

const mapSelectorsToProps = state => {
  return {
    selectedTheme: appSelectors.selectedTheme(state),
  };
};

const mapActionsToProps = dispatch => {
  return {
    addNotification: payload => dispatch(appActions.addNotification(payload)),
    sendResetEmail: (payload, callbacks) => dispatch(authActions.sendResetEmail(payload, callbacks)),
  };
};

const Component = withTheme(ResetPassword);
const ResetPasswordWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { ResetPasswordWrapper };