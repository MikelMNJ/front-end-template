
import { useEffect, useState } from 'react';
import { Routes } from 'react-router-dom';
import { makeRoutes, autoLogout, sessionCheck } from 'helpers';
import { Banner } from 'xerum';

const App = props => {
  const {
    theme,
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

  return (
    <div id='app'>
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

      {/* <Notifications
        notifications={notifications}
        removeNotification={removeNotification}
      /> */}
    </div>
  );
};

export { App };