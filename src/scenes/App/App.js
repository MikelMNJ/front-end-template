
import { Fragment, useEffect } from 'react';
import { Routes } from 'react-router-dom';
import { appConstants } from 'modules';
import { makeRoutes, autoLogout, sessionCheck } from 'helpers';
import { GlobalStyles, StyledApp, MainContent } from './styles';
import { Header, Footer } from 'scenes';
import { Notifications } from 'xerum';

const appName = appConstants.appName;
const tokenParam = appConstants.tokenParam;

const App = props => {
  const { userInfo, checkToken, logout, ...rest } = props;
  const token = userInfo?.token;
  const showUI = token;

  useEffect(() => {
    const existingSettings = JSON.parse(localStorage.getItem(appName));
    const existingToken = existingSettings?.[tokenParam];
    const payload = { token: existingToken };

    if (existingToken) checkToken(payload);
  }, []);

  useEffect(() => {
    autoLogout(token, logout, props.addNotification);
    return () => clearInterval(sessionCheck);
  }, [ token ]);

  return (
    <Fragment>
      <GlobalStyles {...rest} />
      <Notifications {...rest} />

      <StyledApp>
        {showUI && <Header token={token} logout={logout} {...rest} />}

        <MainContent token={showUI}>
          <Routes>
            {makeRoutes(token)}
          </Routes>
        </MainContent>

        {showUI && <Footer {...rest} />}
      </StyledApp>
    </Fragment>
  );
};

export { App };