import { connect } from 'react-redux';
import { SetPassword } from 'scenes';
import { withTheme } from 'styled-components';
import { appSelectors, appActions, authActions } from 'modules';

const mapSelectorsToProps = state => {
  return {
    selectedTheme: appSelectors.selectedTheme(state),
  };
};

const mapActionsToProps = dispatch => {
  return {
    updateUser: (payload, callbacks) => dispatch(authActions.updateUser(payload, callbacks)),
    addNotification: payload => dispatch(appActions.addNotification(payload)),
  };
};

const Component = withTheme(SetPassword);
const SetPasswordWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { SetPasswordWrapper };