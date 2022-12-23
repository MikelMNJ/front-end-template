import { connect } from 'react-redux';
import { Login } from 'scenes';
import { withTheme } from 'styled-components';
import { appSelectors, appActions } from 'modules';

const mapSelectorsToProps = state => {
  return {
    selectedTheme: appSelectors.selectedTheme(state),
    modalVisible: appSelectors.modalVisible(state),
  };
};

const mapActionsToProps = dispatch => {
  return {
    setModalVisible: payload => dispatch(appActions.setModalVisible(payload)),
  };
};

const Component = withTheme(Login);
const LoginWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { LoginWrapper };