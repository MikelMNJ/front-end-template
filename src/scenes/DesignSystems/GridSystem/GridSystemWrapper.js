import { connect } from 'react-redux';
import { GridSystem } from 'scenes';
import { withTheme } from 'styled-components';
import { appSelectors } from 'modules';

const mapSelectorsToProps = state => {
  return {
    selectedTheme: appSelectors.selectedTheme(state),
  };
};

const mapActionsToProps = () => {
  return {};
};

const Component = withTheme(GridSystem);
const GridSystemWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { GridSystemWrapper };