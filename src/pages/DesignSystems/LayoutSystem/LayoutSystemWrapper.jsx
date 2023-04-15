import { connect } from 'react-redux';
import { LayoutSystem } from 'pages';
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

const Component = withTheme(LayoutSystem);
const LayoutSystemWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { LayoutSystemWrapper };