
import { useEffect, useState } from 'react';
import { Routes } from 'react-router-dom';
import { makeRoutes, autoLogout, sessionCheck } from 'helpers';
import { appConstants } from 'modules';
import { GlobalStyle } from './styles';
import { Banner, Button, Spacer } from 'xerum';
import { H1, H2, H3, H4, H5, H6, Font } from 'components';

const { light, dark } = appConstants.themes;

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

  const [ showBanner, setShowBanner ] = useState(true);
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

  const handleThemeChange = () => setTheme(selectedTheme === light ? dark : light);

  return (
    <div>
      <Routes>
        {makeRoutes(token)}
      </Routes>

      {bannerContent && showBanner && (
        <Banner
        theme={theme}
        selectedTheme={selectedTheme}
        center={true}
        text={bannerContent}
        callback={() => setShowBanner(false)}
        />
      )}

      <Spacer />

      <Button
        theme={theme}
        selectedTheme={selectedTheme}
        text={selectedTheme}
        btnType='solid'
        icon={selectedTheme === light ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
        disabled={false}
        callback={handleThemeChange}
      />

      <H1>Heading Test</H1>
      <H2>Heading Test</H2>
      <H3>Heading Test</H3>
      <H4>Heading Test</H4>
      <H5>Heading Test</H5>
      <H6>Heading Test</H6>

      <Font weight='light'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Font>

      {/* <Notifications
        notifications={notifications}
        removeNotification={removeNotification}
      /> */}

      <GlobalStyle theme={theme} selectedTheme={selectedTheme} />
    </div>
  );
};

export { App };