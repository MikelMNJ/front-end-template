import { H2 } from 'components';
import { NotFound } from 'xerum';
import { theme } from 'theme';
import { appConstants } from 'modules';
import {
  MainWrapper,
  LoginWrapper,
  CreateAccountWrapper,
  ResetPasswordWrapper,
  SetPasswordWrapper,
} from 'scenes';

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
    element: <LoginWrapper />,
  },
  {
    path: '/create-account',
    element: <CreateAccountWrapper />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordWrapper />,
  },
  {
    path: '/set-password',
    element: <SetPasswordWrapper />,
  },

  // Private routes
  {
    path: '/authenticated-route',
    element: <p>Authenticated content.</p>,
    authenticate: true,
  },
];

export { routes };