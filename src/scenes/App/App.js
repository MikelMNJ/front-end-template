import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appSelectors, appActions } from 'modules';
import { appConstants } from 'modules';
import { withTheme } from 'styled-components';

const App = withTheme(props => {
  const { theme } = props;
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => appSelectors.theme(state));
  const notifications = useSelector(state => appSelectors.notifications(state));
  const setTheme = payload => dispatch(appActions.setTheme(payload));
  const addNotification = payload => dispatch(appActions.addNotification(payload));

  useEffect(() => {
    console.log({ currentTheme, theme });
  }, [ currentTheme, theme ]);

  const handleThemeChange = () => {
    const { light, dark } = appConstants.theme;
    setTheme(currentTheme === light ? dark : light);
  };

  return (
    <div className='App'>
      <button onClick={handleThemeChange}>
        {currentTheme}
      </button>
    </div>
  );
});

export { App };