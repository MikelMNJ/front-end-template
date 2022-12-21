
import { Fragment, useEffect } from 'react';
import { Routes } from 'react-router-dom';
import { makeRoutes, autoLogout, sessionCheck } from 'helpers';
import { GlobalStyles, StyledApp, MainContent } from './styles';
import { Header, Footer } from 'scenes';

const App = props => {
  const { userInfo, tokenName, checkToken, logout, ...rest } = props;
  const token = userInfo?.token;

  useEffect(() => {
    const existingToken = localStorage.getItem(tokenName);
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
      {/* <Notifications {...rest} /> */}

      <StyledApp>
        <Header {...rest} />

        <MainContent>
          <Routes>
            {makeRoutes(token)}
          </Routes>
        </MainContent>

        <Footer {...rest} />
      </StyledApp>
    </Fragment>
  );
};

export { App };