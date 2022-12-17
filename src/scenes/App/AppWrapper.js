import { connect } from 'react-redux';
import { App } from 'scenes';
import {
  appSelectors,
  appActions,
  authSelectors,
  authActions,
  rootActions
} from 'modules';

const mapSelectorsToProps = state => {
  return {
    bannerContent: appSelectors.bannerContent(state),
    notifications: appSelectors.notifications(state),
    userInfo: authSelectors.userInfo(state),
    tokenName: authSelectors.tokenName(state),
  };
};

const mapActionsToProps = dispatch => {
  return {
    addNotification: payload => dispatch(appActions.addNotification(payload)),
    removeNotification: payload => dispatch(appActions.removeNotification(payload)),
    checkToken: payload => dispatch(authActions.checkToken(payload)),
    logout: () => dispatch(rootActions.logout()),
  }
};

const AppWrapper = connect(mapSelectorsToProps, mapActionsToProps)(App);

export { AppWrapper };