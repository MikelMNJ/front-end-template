import { MainWrapper } from 'scenes';

const routes = [
  // Public routes
  {
    path: '*',
    element: <p>Not found</p>,
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