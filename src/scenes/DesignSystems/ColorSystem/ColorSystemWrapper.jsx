import { connect } from 'react-redux';
import { ColorSystem } from 'scenes';
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

const Component = withTheme(ColorSystem);
const ColorSystemWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { ColorSystemWrapper };