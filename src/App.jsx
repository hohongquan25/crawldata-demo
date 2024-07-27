import { RouterProvider } from 'react-router-dom';

// project import
import router from 'routes';
import ThemeCustomization from 'themes';
import { ToastContainer, toast } from 'react-toastify';
import './index.css';

import 'react-toastify/dist/ReactToastify.css';
import ScrollTop from 'components/ScrollTop';
import { Provider } from 'react-redux';
import store from 'store/store';
import AuthProvider from 'contexts/auth-reducer/AuthContext';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
  return (
    <Provider store={store}>
      <ThemeCustomization>
        <AuthProvider>
          <ScrollTop>
            <RouterProvider router={router} />
            <ToastContainer draggable autoClose={2500} />
          </ScrollTop>
        </AuthProvider>
      </ThemeCustomization>
    </Provider>
  );
}
