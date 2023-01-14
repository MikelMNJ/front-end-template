import { connect } from 'react-redux';
import { Main } from 'scenes';
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

const Component = withTheme(Main);
const MainWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { MainWrapper };