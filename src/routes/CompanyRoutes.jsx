import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import CompanyRouteProtected from './CompanyRouteProtected';

// render - login
const NoLayout = Loadable(lazy(() => import('layout/NoLayout/NoLayout')));
const ListCompany = Loadable(
  lazy(() => import('pages/list-company/ListCompany'))
);

// ==============================|| AUTH ROUTING ||============================== //

const CompanyRoutes = {
  path: '/',
  element: <NoLayout />,
  children: [
    {
      path: '',
      element: <ListCompany />
    }
  ]
};

export default CompanyRoutes;
