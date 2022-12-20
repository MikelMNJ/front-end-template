import { connect } from 'react-redux';
import { Main } from 'scenes';
import { withTheme } from 'styled-components';
import {  } from 'modules';

const mapSelectorsToProps = state => {
  return {

  };
};

const mapActionsToProps = dispatch => {
  return {

  };
};

const Component = withTheme(Main);
const MainWrapper = connect(mapSelectorsToProps, mapActionsToProps)(Component);

export { MainWrapper };