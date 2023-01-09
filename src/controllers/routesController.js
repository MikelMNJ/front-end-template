import { H2 } from 'components/Typography/H2';
import { NotFound } from 'xerum';
import { appConstants } from 'modules';
import { theme } from 'theme';
import {
  MainWrapper,
  LoginWrapper,
  CreateAccountWrapper,
  ResetPasswordWrapper,
  SetPasswordWrapper,
  PrivacyPolicyWrapper,
  TermsOfServiceWrapper,
  ColorSystemWrapper,
  TypeSystemWrapper,
  LayoutSystemWrapper,
} from 'scenes';

const routes = [
  // Private routes
  {
    path: '/',
    element: <MainWrapper />,
    authenticate: true,
  },
  {
    path: '/authenticated-route',
    element: <p>Authenticated content.</p>,
    authenticate: true,
  },

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
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyWrapper />,
  },
  {
    path: '/terms-of-service',
    element: <TermsOfServiceWrapper />,
  },

  // Public routes: Desing systems
  {
    path: '/color',
    element: <ColorSystemWrapper />,
  },
  {
    path: '/typography',
    element: <TypeSystemWrapper />,
  },
  {
    path: '/layout',
    element: <LayoutSystemWrapper />,
  },
];

export { routes };