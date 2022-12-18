
import { useEffect, useState } from 'react';
import { Routes } from 'react-router-dom';
import { makeRoutes, autoLogout, sessionCheck } from 'helpers';
import { appConstants } from 'modules';
import { GlobalStyle } from './styles';
import { Banner, Button } from 'xerum';
import { H2, Font } from 'components';

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
        center={true}
        sharp={true}
        text={bannerContent}
        callback={() => setShowBanner(false)}
        />
      )}

      <Button
        theme={theme}
        selectedTheme={selectedTheme}
        text={selectedTheme}
        btnType='ghost'
        icon={selectedTheme === light ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
        disabled={false}
        callback={handleThemeChange}
      />

      <H2>Heading Test</H2>

      <Font weight='extraLight'>
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