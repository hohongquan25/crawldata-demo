import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/login')));
const AuthChangePassword = Loadable(
  lazy(() => import('pages/authentication/changePassword'))
);
const AuthRegister = Loadable(
  lazy(() => import('pages/authentication/register'))
);

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <AuthLogin />
    },
    {
      path: '/register',
      element: <AuthRegister />
    },
    {
      path: '/change-password',
      element: <AuthChangePassword />
    }
  ]
};

export default LoginRoutes;
