import { appSelectors, appActions } from 'modules';
import { connect } from 'react-redux';
import { App } from 'scenes';

const mapSelectorsToProps = state => {
  return {
    theme: appSelectors.theme(state),
    globalBanner: appSelectors.globalBanner(state),
    notifications: appSelectors.notifications(state),
    sampleResponse: appSelectors.sampleResponse(state),
  };
};

const mapActionsToProps = dispatch => {
  return {
    setTheme: payload => dispatch(appActions.setTheme(payload)),
    setGlobalBanner: payload => dispatch(appActions.setGlobalBanner(payload)),
    addNotification: payload => dispatch(appActions.addNotification(payload)),
    removeNotification: payload => dispatch(appActions.removeNotification(payload)),
    clearNotifications: () => dispatch(appActions.clearNotifications()),
    sampleAPICall: (payload, callbacks) => dispatch(appActions.sampleAPICall(payload, callbacks)),
  }
};

const AppWrapper = connect(mapSelectorsToProps, mapActionsToProps)(App);

export { AppWrapper };