import { MainWrapper } from 'scenes';
import { H2 } from 'components';
import { NotFound } from 'xerum';
import { theme } from 'theme';
import { appConstants } from 'modules';

const routes = [
  // Public routes
  {
    path: '*',
    element: <NotFound
      theme={theme}
      selectedTheme={appConstants.themes.light}
      icon='fa-solid fa-sad-tear'
      title={<H2>Unga Bunga!  We bungled the request ...</H2>}
      message="We'll try to do better, next time."
    />,
  },
  {
    path: '/',
    element: <MainWrapper />,
  },
  {
    path: '/login',
    element: <p>Login</p>,
  },
  {
    path: '/create-account',
    element: <p>Create account</p>,
  },
  {
    path: '/reset-password',
    element: <p>Reset password</p>,
  },
  {
    path: '/set-password',
    element: <p>Set password</p>,
  },

  // Private routes
  {
    path: '/authenticated-route',
    element: <p>Authenticated content.</p>,
    authenticate: true,
  },
];

export { routes };