import { connect } from 'react-redux';
import { Login } from 'pages';
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
    addNotification: payload => dispatch(appActions.addNotification(payload)),
    login: (payload, callbacks) => dispatch(authActions.login(payload, callbacks)),
  };
};

const Component = withTheme(Login);
const LoginWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { LoginWrapper };