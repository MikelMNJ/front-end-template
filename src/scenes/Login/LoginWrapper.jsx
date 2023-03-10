import { connect } from 'react-redux';
import { Login } from 'scenes';
import { withTheme } from 'styled-components';
import { appSelectors, appActions, authSelectors, authActions } from 'modules';

const mapSelectorsToProps = state => {
  return {
    selectedTheme: appSelectors.selectedTheme(state),
    userInfo: authSelectors.userInfo(state),
  };
};

const mapActionsToProps = dispatch => {
  return {
    addNotifcation: payload => dispatch(appActions.addNotification(payload)),
    login: (payload, callbacks) => dispatch(authActions.login(payload, callbacks)),
  };
};

const Component = withTheme(Login);
const LoginWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { LoginWrapper };