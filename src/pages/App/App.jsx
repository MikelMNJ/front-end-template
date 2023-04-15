
import { Fragment, useEffect } from 'react';
import { Routes } from 'react-router-dom';
import { appConstants } from 'modules';
import { makeRoutes, autoLogout, sessionCheck } from 'helpers';
import { GlobalStyles, StyledApp, MainContent } from './styles';
import { Header, Footer } from 'pages';
import { Font } from 'components';
import { Notifications, Loading, Modal } from 'xerum';
import _ from 'lodash';

const appName = appConstants.appName;
const tokenKeyName = appConstants.tokenKeyName;

/*
* TODO: Remove demoSite instances when app can authenticate users.
* Disables production authentication for testing without auth requirement.
* Placeholder authentication, via mirage, still enabled in development.
* Also remove in routesController.jsx
*/
const demoSite = window.location.href.includes('netlify.app');

const App = props => {
  const { userInfo, checkToken, logout, userInfoLoading, modalContent, setModalContent, ...rest } = props;
  const lightTheme = props.selectedTheme === appConstants.themes.light;
  const token = userInfo?.token;

  const colorOverride = lightTheme
    ? props.theme.modes[props.selectedTheme].accent
    : props.theme.modes[props.selectedTheme].onPrimary;

  useEffect(() => {
    const existingSettings = JSON.parse(localStorage.getItem(appName));
    const existingToken = existingSettings?.[tokenKeyName];
    const payload = { token: existingToken };

    if (existingToken && !demoSite) checkToken(payload);
  }, [ checkToken ]);

  useEffect(() => {
    autoLogout(token, logout, props.addNotification);
    return () => clearInterval(sessionCheck);
  }, [ token, logout, props.addNotification ]);

  const renderApp = () => {
    return (
      <StyledApp>
        {(token || demoSite) && <Header token={token || demoSite} logout={logout} {...rest} />}

        <MainContent>
          <Routes>
            {makeRoutes(token)}
          </Routes>
        </MainContent>

        {(token || demoSite) && <Footer {...rest} />}
      </StyledApp>
    );
  };

  return (
    <Fragment>
      <GlobalStyles {...rest} />
      <Notifications {...rest} />

      <Loading
        isLoading={userInfoLoading}
        hasData={userInfo}
        iconColor={colorOverride}
        textColor={colorOverride}
        text={<Font size={1.125} weight='semibold'>Authenticating...</Font>}
        renderOnFail={true}
      >
        {renderApp()}

        <Modal
          visible={!_.isEmpty(modalContent)}
          onClose={() => setModalContent(null)}
        >
          {modalContent}
        </Modal>
      </Loading>
    </Fragment>
  );
};

export { App };