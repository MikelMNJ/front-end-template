import { connect } from 'react-redux';
import { ResetPassword } from 'scenes';
import { withTheme } from 'styled-components';
import { appSelectors, appActions } from 'modules';

const mapSelectorsToProps = state => {
  return {
    selectedTheme: appSelectors.selectedTheme(state),
    modalContent: appSelectors.modalContent(state),
  };
};

const mapActionsToProps = dispatch => {
  return {
    setModalContent: payload => dispatch(appActions.setModalContent(payload)),
  };
};

const Component = withTheme(ResetPassword);
const ResetPasswordWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { ResetPasswordWrapper };