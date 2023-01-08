import { connect } from 'react-redux';
import { TypeSystem } from 'scenes';
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

const Component = withTheme(TypeSystem);
const TypeSystemWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { TypeSystemWrapper };