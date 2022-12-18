
import { useEffect, useState } from 'react';
import { Routes } from 'react-router-dom';
import { makeRoutes, autoLogout, sessionCheck } from 'helpers';
import { appConstants } from 'modules';
import { GlobalStyle } from './styles';
import { Banner, Button } from 'xerum';

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

  const handleThemeChange = () => {
    const { light, dark } = appConstants.theme;
    setTheme(selectedTheme === light ? dark : light);
  };

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
        icon={selectedTheme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
        disabled={false}
        callback={handleThemeChange}
      />

      {/* <Notifications
        notifications={notifications}
        removeNotification={removeNotification}
      /> */}

      <GlobalStyle theme={theme} selectedTheme={selectedTheme} />
    </div>
  );
};

export { App };