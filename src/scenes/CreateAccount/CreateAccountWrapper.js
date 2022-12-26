import { connect } from 'react-redux';
import { CreateAccount } from 'scenes';
import { withTheme } from 'styled-components';
import { appSelectors, appActions, authSelectors, authActions } from 'modules';

const mapSelectorsToProps = state => {
  return {
    userInfo: authSelectors.userInfo(state),
    selectedTheme: appSelectors.selectedTheme(state),
    modalContent: appSelectors.modalContent(state),
  };
};

const mapActionsToProps = dispatch => {
  return {
    setModalContent: payload => dispatch(appActions.setModalContent(payload)),
    createUser: (payload, callbacks) => dispatch(authActions.createUser(payload, callbacks)),
  };
};

const Component = withTheme(CreateAccount);
const CreateAccountWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { CreateAccountWrapper };