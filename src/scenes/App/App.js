
import { useEffect, useState } from 'react';
import { Routes } from 'react-router-dom';
import { makeRoutes, autoLogout, sessionCheck } from 'helpers';

const App = props => {
  const {
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

      {showBanner && bannerContent && (
        // TODO: Replace with Banner from xerum.
        <div className='banner' />
      )}

      {/* Add Notifications from xerum. */}
    </div>
  );
};

export { App };