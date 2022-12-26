import { connect } from 'react-redux';
import { withTheme } from 'styled-components';
import { PrivacyPolicy } from 'scenes';
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

const Component = withTheme(PrivacyPolicy);
const PrivacyPolicyWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { PrivacyPolicyWrapper };