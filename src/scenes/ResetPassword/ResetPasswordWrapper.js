import { connect } from 'react-redux';
import { ResetPassword } from 'scenes';
import { withTheme } from 'styled-components';
import { appSelectors, appActions, authActions } from 'modules';

const mapSelectorsToProps = state => {
  return {
    selectedTheme: appSelectors.selectedTheme(state),
    modalContent: appSelectors.modalContent(state),
  };
};

const mapActionsToProps = dispatch => {
  return {
    addNotification: payload => dispatch(appActions.addNotification(payload)),
    setModalContent: payload => dispatch(appActions.setModalContent(payload)),
    sendResetEmail: (payload, callbacks) => dispatch(authActions.sendResetEmail(payload, callbacks)),
  };
};

const Component = withTheme(ResetPassword);
const ResetPasswordWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { ResetPasswordWrapper };