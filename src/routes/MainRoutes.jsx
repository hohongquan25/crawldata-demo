import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import PushOrders from 'pages/orders/push-orders/PushOrders';
import ImportOrders from 'pages/orders/import-orders/ImportOrders';
import PushOrdersHistory from 'pages/orders/push-orders-history/PushOrdersHistory';
import PrivateRoute from './PrivateRoute';
import AccountPage from 'pages/account';
import ListCompany from 'pages/list-company/ListCompany';
import CompanyRouteProtected from './CompanyRouteProtected';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(
  lazy(() => import('pages/component-overview/typography'))
);
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page
const SamplePage = Loadable(
  lazy(() => import('pages/extra-pages/sample-page'))
);
const CrawlData = Loadable(lazy(() => import('pages/crawl-data/index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <PrivateRoute element={<Dashboard />} />,
  children: [
    {
      path: '/dashboard',
      element: <PrivateRoute element={<DashboardDefault />} />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'crawl-data',
      element: <PrivateRoute element={<CrawlData />} />
    },
    {
      path: 'sample-page',
      element: <PrivateRoute element={<SamplePage />} />
    },
    {
      path: 'contact',
      element: <PrivateRoute element={<SamplePage />} />
    },
    {
      path: 'shadow',
      element: <PrivateRoute element={<Shadow />} />
    },
    {
      path: 'typography',
      element: <PrivateRoute element={<Typography />} />
    },
    {
      path: 'push-orders',
      element: <PrivateRoute element={<PushOrders />} />
    },
    {
      path: 'import-orders',
      element: <PrivateRoute element={<ImportOrders />} />
    },
    {
      path: 'push-orders-history',
      element: <PrivateRoute element={<PushOrdersHistory />} />
    },
    {
      path: 'account',
      element: <PrivateRoute element={<AccountPage />} />
    }
  ]
};

export default MainRoutes;
