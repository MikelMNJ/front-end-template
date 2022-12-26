
import { Fragment, useEffect } from 'react';
import { Routes } from 'react-router-dom';
import { appConstants } from 'modules';
import { makeRoutes, autoLogout, sessionCheck } from 'helpers';
import { GlobalStyles, StyledApp, MainContent } from './styles';
import { Header, Footer } from 'scenes';
import { Font } from 'components';
import { Notifications, Loading } from 'xerum';

const appName = appConstants.appName;
const tokenParam = appConstants.tokenParam;

const App = props => {
  const { userInfo, checkToken, logout, userInfoLoading, ...rest } = props;
  const lightTheme = props.selectedTheme === appConstants.themes.light;
  const token = userInfo?.token;
  const showUI = token;

  const colorOverride = lightTheme
    ? props.theme.modes[props.selectedTheme].accent
    : props.theme.modes[props.selectedTheme].onPrimary;

  useEffect(() => {
    const existingSettings = JSON.parse(localStorage.getItem(appName));
    const existingToken = existingSettings?.[tokenParam];
    const payload = { token: existingToken };

    if (existingToken) checkToken(payload);
  }, [ checkToken ]);

  useEffect(() => {
    autoLogout(token, logout, props.addNotification);
    return () => clearInterval(sessionCheck);
  }, [ token, logout, props.addNotification ]);

  const renderApp = () => {
    return (
      <StyledApp>
        {showUI && <Header token={token} logout={logout} {...rest} />}

        <MainContent token={showUI}>
          <Routes>
            {makeRoutes(token)}
          </Routes>
        </MainContent>

        {showUI && <Footer {...rest} />}
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
        text={<Font size={1.125} weight='bold'>Authenticating...</Font>}
        renderOnFail={true}
      >
        {renderApp()}
      </Loading>
    </Fragment>
  );
};

export { App };