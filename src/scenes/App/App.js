
import { Fragment, useEffect } from 'react';
import { Routes } from 'react-router-dom';
import { makeRoutes, autoLogout, sessionCheck } from 'helpers';
import { GlobalStyle, StyledApp, MainContent } from './styles';
import { Header, Footer } from 'scenes';

const App = props => {
  const {
    theme,
    selectedTheme,
    setTheme,
    bannerContent,
    notifications,
    userInfo,
    tokenName,
    addNotification,
    removeNotification,
    checkToken,
    logout,
  } = props;

  const token = userInfo?.token;

  useEffect(() => {
    const existingToken = localStorage.getItem(tokenName);
    const payload = { token: existingToken };

    if (existingToken) checkToken(payload);
  }, []);

  useEffect(() => {
    autoLogout(token, logout, addNotification);
    return () => clearInterval(sessionCheck);
  }, [ token ]);

  return (
    <Fragment>
      <GlobalStyle theme={theme} selectedTheme={selectedTheme} />
      {/* <Notifications
        theme={theme}
        selectedTheme={selectedTheme}
        notifications={notifications}
        removeNotification={removeNotification}
      /> */}

      <StyledApp>
        <Header
          theme={theme}
          selectedTheme={selectedTheme}
          setTheme={setTheme}
          bannerContent={bannerContent}
        />

        <MainContent>
          <Routes>
            {makeRoutes(token)}
          </Routes>
        </MainContent>

        <Footer theme={theme} selectedTheme={selectedTheme} />
      </StyledApp>
    </Fragment>
  );
};

export { App };