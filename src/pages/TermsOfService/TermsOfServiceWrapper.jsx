import { connect } from 'react-redux';
import { withTheme } from 'styled-components';
import { TermsOfService } from 'pages';
import { appSelectors } from 'modules';

const mapSelectorsToProps = state => {
  return {
    selectedTheme: appSelectors.selectedTheme(state),
  };
};

const mapActionsToProps = () => {
  return {

  };
};

const Component = withTheme(TermsOfService);
const TermsOfServiceWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { TermsOfServiceWrapper };